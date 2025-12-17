"use client"

import React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { X, Plus, Edit, Save } from "lucide-react"

interface WorkOrderDetail {
  id: string
  colour: string
  qty: number
  rate: string
  remarks: string
  swatch: string
}

interface WorkOrderItem {
  id: string
  sl: number
  fabricDescription: string
  gsm: string
  fWidthInch: string
  quality: string
  natureOfWork: string
  details: WorkOrderDetail[]
}

const AVAILABLE_COLUMNS = [
  { id: "sl", label: "S/L Column", key: "mergeSL" },
  { id: "fabricDesc", label: "Fabric Description", key: "mergeFabricDesc" },
  { id: "gsm", label: "GSM", key: "mergeGSM" },
  { id: "fWidth", label: "F/Width", key: "mergeFWidth" },
  { id: "quality", label: "Quality", key: "mergeQuality" },
  { id: "natureOfWork", label: "Nature of Work", key: "mergeNatureOfWork" },
] as const

export default function WorkOrderForm() {
  const [isEditMode, setIsEditMode] = useState(false)

  const [workOrderItems, setWorkOrderItems] = useState<WorkOrderItem[]>([
    {
      id: "1",
      sl: 1,
      fabricDescription: "16x10/112x56 Twill",
      gsm: "",
      fWidthInch: "57/58",
      quality: "N/P",
      natureOfWork: "Reactive Dyeing",
      details: [
        { id: "1-1", colour: "Black", qty: 3000, rate: "BDT.43.00 Tk.", remarks: "", swatch: "No" },
        { id: "1-2", colour: "Khaki", qty: 2100, rate: "BDT.38.00 Tk.", remarks: "", swatch: "Yes" },
      ],
    },
    {
      id: "2",
      sl: 2,
      fabricDescription: "20x20/108x58 Twill",
      gsm: "",
      fWidthInch: "57/58",
      quality: "N/P",
      natureOfWork: "Reactive Dyeing",
      details: [
        { id: "2-1", colour: "Khaki", qty: 1155, rate: "", remarks: "", swatch: "Yes" },
        { id: "2-2", colour: "Burgundy", qty: 1000, rate: "BDT.40.00 Tk.", remarks: "", swatch: '"' },
        { id: "2-3", colour: "Brown", qty: 1000, rate: "", remarks: "", swatch: '"' },
      ],
    },
  ])

  const [mergeStates, setMergeStates] = useState({
    sl: true,
    fabricDesc: true,
    gsm: true,
    fWidth: true,
    quality: true,
    natureOfWork: true,
  })

  const [activeColumns, setActiveColumns] = useState<string[]>(AVAILABLE_COLUMNS.map((col) => col.id))
  const [showAddColumn, setShowAddColumn] = useState(false)

  const removeColumn = (columnId: string) => {
    console.log("[v0] Removing column:", columnId)
    setActiveColumns((prev) => prev.filter((id) => id !== columnId))
    // Disable merge for the removed column
    setMergeStates((prev) => ({ ...prev, [columnId]: false }))
  }

  const addColumn = (columnId: string) => {
    console.log("[v0] Adding column:", columnId)
    if (!activeColumns.includes(columnId)) {
      setActiveColumns((prev) => [...prev, columnId])
    }
    setShowAddColumn(false)
  }

  const toggleMerge = (columnId: string, checked: boolean) => {
    console.log("[v0] Toggling merge for", columnId, "to", checked)
    setMergeStates((prev) => ({ ...prev, [columnId]: checked }))
  }

  const availableToAdd = AVAILABLE_COLUMNS.filter((col) => !activeColumns.includes(col.id))

  const totalQty = workOrderItems.reduce(
    (sum, item) => sum + item.details.reduce((detailSum, detail) => detailSum + detail.qty, 0),
    0,
  )

  const addNewItem = () => {
    const newId = String(workOrderItems.length + 1)
    const newItem: WorkOrderItem = {
      id: newId,
      sl: workOrderItems.length + 1,
      fabricDescription: "",
      gsm: "",
      fWidthInch: "",
      quality: "",
      natureOfWork: "",
      details: [
        {
          id: `${newId}-1`,
          colour: "",
          qty: 0,
          rate: "",
          remarks: "",
          swatch: "",
        },
      ],
    }
    setWorkOrderItems([...workOrderItems, newItem])
  }

  const addDetailRow = (itemId: string) => {
    setWorkOrderItems(
      workOrderItems.map((item) => {
        if (item.id === itemId) {
          const newDetailId = `${itemId}-${item.details.length + 1}`
          return {
            ...item,
            details: [
              ...item.details,
              {
                id: newDetailId,
                colour: "",
                qty: 0,
                rate: "",
                remarks: "",
                swatch: "",
              },
            ],
          }
        }
        return item
      }),
    )
  }

  const removeItem = (itemId: string) => {
    setWorkOrderItems(workOrderItems.filter((item) => item.id !== itemId))
  }

  const removeDetailRow = (itemId: string, detailId: string) => {
    setWorkOrderItems(
      workOrderItems.map((item) => {
        if (item.id === itemId) {
          // Don't allow removing the last detail row
          if (item.details.length <= 1) return item
          return {
            ...item,
            details: item.details.filter((detail) => detail.id !== detailId),
          }
        }
        return item
      }),
    )
  }

  const updateItemField = (itemId: string, field: keyof WorkOrderItem, value: any) => {
    setWorkOrderItems(workOrderItems.map((item) => (item.id === itemId ? { ...item, [field]: value } : item)))
  }

  const updateDetailField = (itemId: string, detailId: string, field: keyof WorkOrderDetail, value: any) => {
    setWorkOrderItems(
      workOrderItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            details: item.details.map((detail) => (detail.id === detailId ? { ...detail, [field]: value } : detail)),
          }
        }
        return item
      }),
    )
  }

  const handleSave = () => {
    setIsEditMode(false)
  }

  return (
    <Card className="max-w-[1400px] mx-auto p-8 bg-white">
      <div className="mb-6 flex justify-end">
        {!isEditMode ? (
          <Button onClick={() => setIsEditMode(true)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <Edit className="w-4 h-4" />
            Edit Mode
          </Button>
        ) : (
          <Button onClick={handleSave} className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
            <Save className="w-4 h-4" />
            Save & Exit Edit Mode
          </Button>
        )}
      </div>

      {isEditMode && (
        <div className="mb-6 p-4 bg-gray-100 border border-gray-300 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900">Table Cell Merge Controls:</h3>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowAddColumn(!showAddColumn)}
              className="flex items-center gap-1"
            >
              <Plus className="w-4 h-4" />
              {showAddColumn ? "Hide" : "Add"} Column Control
            </Button>
          </div>

          {showAddColumn && availableToAdd.length > 0 && (
            <div className="mb-4 p-3 bg-white border border-gray-300 rounded-md">
              <p className="text-sm font-medium mb-2">Select column to add merge control:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {availableToAdd.map((column) => (
                  <Button
                    key={column.id}
                    size="sm"
                    variant="outline"
                    onClick={() => addColumn(column.id)}
                    className="justify-start"
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    {column.label}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {showAddColumn && availableToAdd.length === 0 && (
            <div className="mb-4 p-3 bg-white border border-gray-300 rounded-md">
              <p className="text-sm text-gray-600">All columns are already added!</p>
            </div>
          )}

          {activeColumns.length === 0 && (
            <p className="text-sm text-gray-600 mb-2">No merge controls active. Add columns to enable merging.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AVAILABLE_COLUMNS.map((column) => {
              if (!activeColumns.includes(column.id)) return null

              return (
                <div
                  key={column.id}
                  className="flex items-center justify-between gap-2 p-2 bg-white rounded border border-gray-200"
                >
                  <div className="flex items-center gap-2 flex-1">
                    <Checkbox
                      id={`merge-${column.id}`}
                      checked={mergeStates[column.id as keyof typeof mergeStates]}
                      onCheckedChange={(checked: boolean) => toggleMerge(column.id, checked)}
                    />
                    <Label htmlFor={`merge-${column.id}`} className="cursor-pointer text-sm">
                      Merge {column.label}
                    </Label>
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => removeColumn(column.id)} className="h-6 w-6 p-0">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )
            })}
          </div>

          {activeColumns.length > 0 && (
            <div className="mt-3 flex gap-2">
              <Button
                size="sm"
                onClick={() => {
                  const newStates = { ...mergeStates }
                  activeColumns.forEach((colId) => {
                    newStates[colId as keyof typeof mergeStates] = true
                  })
                  setMergeStates(newStates)
                }}
              >
                Enable All Active Merges
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  const newStates = { ...mergeStates }
                  activeColumns.forEach((colId) => {
                    newStates[colId as keyof typeof mergeStates] = false
                  })
                  setMergeStates(newStates)
                }}
              >
                Disable All Active Merges
              </Button>
            </div>
          )}
        </div>
      )}

      {isEditMode && (
        <div className="mb-6 p-4 bg-green-50 border border-green-300 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-green-900">Row Management:</h3>
            <Button size="sm" onClick={addNewItem} className="flex items-center gap-1 bg-green-600 hover:bg-green-700">
              <Plus className="w-4 h-4" />
              Add New Fabric Item
            </Button>
          </div>
          <p className="text-sm text-green-700">
            Add new fabric items (with merge-able rows) or add color detail rows within existing items.
          </p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-4 mb-6 items-start">
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 bg-gray-200 border border-gray-400 flex items-center justify-center">
            <span className="text-xs font-bold">LOGO</span>
          </div>
          <div className="text-sm font-bold">Tithi Group of Industries</div>
        </div>
        <div className="text-center">
          <div className="bg-gray-700 text-white py-2 px-4 font-bold">WORK ORDER</div>
        </div>
        <div className="text-right">
          <p className="text-xs">Tithi Group of Industries</p>
          <p className="text-xs">Kotwaliirchar, Madhabdi, Narsingdi.</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="font-bold">W/ORDER :</span>
          <div className="border-2 border-black px-4 py-1">
            <span className="font-bold">T-6582</span>
          </div>
        </div>
        <div></div>
        <div className="border-2 border-black px-4 py-1 text-right">
          <span className="font-bold">Date: 22.03.2025</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-2 mb-2">
          <div className="flex items-center">
            <span className="font-bold mr-2">1st Party</span>
            <span className="mr-2">:</span>
            <div className="border border-black px-3 py-1 flex-1">Tithi Textile Mills (Pvt.) Ltd. (Export)</div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-center">
            <span className="font-bold mr-2">2nd Party</span>
            <span className="mr-2">:</span>
            <div className="border border-black px-3 py-1 flex-1 text-center font-bold">RB Textile</div>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div className="border border-black px-2 py-1 inline-block">
          <span className="font-bold">Order Specification</span>
        </div>
      </div>

      <div className="text-center mb-4">
        <span className="font-bold text-lg">(Revise Copy)</span>
      </div>

      <div className="border-2 border-black mb-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="border-r border-black p-2 w-12">S/L</th>
              <th className="border-r border-black p-2 min-w-[200px]" colSpan={3}>
                Fabrics Description
              </th>
              <th className="border-r border-black p-2 w-16">GSM</th>
              <th className="border-r border-black p-2 w-20">F/Width Inch.</th>
              <th className="border-r border-black p-2 w-20">Quality</th>
              <th className="border-r border-black p-2 w-32">Nature Of Work</th>
              <th className="border-r border-black p-2 w-24">Colour</th>
              <th className="border-r border-black p-2 w-20">Qty. (yds)</th>
              <th className="border-r border-black p-2 min-w-[150px]" colSpan={3}>
                Rate (TK./Per Yds)
              </th>
            </tr>
            <tr className="border-b border-black text-xs">
              <th className="border-r border-black p-1"></th>
              <th className="border-r border-black p-1 w-16"></th>
              <th className="border-r border-black p-1 w-16"></th>
              <th className="border-r border-black p-1 w-16"></th>
              <th className="border-r border-black p-1"></th>
              <th className="border-r border-black p-1"></th>
              <th className="border-r border-black p-1"></th>
              <th className="border-r border-black p-1"></th>
              <th className="border-r border-black p-1"></th>
              <th className="border-r border-black p-1"></th>
              <th className="border-r border-black p-1 w-16">Good</th>
              <th className="border-r border-black p-1 w-24">Remarks</th>
              <th className="p-1 w-16">Swatch</th>
            </tr>
          </thead>
          <tbody>
            {workOrderItems.map((item, itemIndex) => (
              <React.Fragment key={item.id}>
                {item.details.map((detail, detailIndex) => (
                  <tr key={detail.id} className="border-b border-black hover:bg-gray-50">
                    {/* S/L Column */}
                    {detailIndex === 0 && mergeStates.sl ? (
                      <td className="border-r border-black p-2 text-center font-bold" rowSpan={item.details.length}>
                        {isEditMode ? (
                          <Input
                            type="number"
                            value={item.sl}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateItemField(item.id, "sl", Number.parseInt(e.target.value) || 0)}
                            className="w-12 h-8 text-center p-1"
                          />
                        ) : (
                          <span>{item.sl}</span>
                        )}
                      </td>
                    ) : !mergeStates.sl ? (
                      <td className="border-r border-black p-2 text-center font-bold">
                        {isEditMode ? (
                          <Input
                            type="number"
                            value={item.sl}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateItemField(item.id, "sl", Number.parseInt(e.target.value) || 0)}
                            className="w-12 h-8 text-center p-1"
                          />
                        ) : (
                          <span>{item.sl}</span>
                        )}
                      </td>
                    ) : null}

                    {/* Fabric Description */}
                    {detailIndex === 0 && mergeStates.fabricDesc ? (
                      <td className="border-r border-black p-2" colSpan={3} rowSpan={item.details.length}>
                        {isEditMode ? (
                          <Input
                            value={item.fabricDescription}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateItemField(item.id, "fabricDescription", e.target.value)}
                            className="w-full h-8 p-1"
                            placeholder="Fabric Description"
                          />
                        ) : (
                          <span>{item.fabricDescription}</span>
                        )}
                      </td>
                    ) : !mergeStates.fabricDesc ? (
                      <td className="border-r border-black p-2" colSpan={3}>
                        {isEditMode ? (
                          <Input
                            value={item.fabricDescription}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateItemField(item.id, "fabricDescription", e.target.value)}
                            className="w-full h-8 p-1"
                            placeholder="Fabric Description"
                          />
                        ) : (
                          <span>{item.fabricDescription}</span>
                        )}
                      </td>
                    ) : null}

                    {/* GSM */}
                    {detailIndex === 0 && mergeStates.gsm ? (
                      <td className="border-r border-black p-2 text-center" rowSpan={item.details.length}>
                        {isEditMode ? (
                          <Input
                            value={item.gsm}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateItemField(item.id, "gsm", e.target.value)}
                            className="w-16 h-8 text-center p-1"
                            placeholder="GSM"
                          />
                        ) : (
                          <span>{item.gsm}</span>
                        )}
                      </td>
                    ) : !mergeStates.gsm ? (
                      <td className="border-r border-black p-2 text-center">
                        {isEditMode ? (
                          <Input
                            value={item.gsm}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateItemField(item.id, "gsm", e.target.value)}
                            className="w-16 h-8 text-center p-1"
                            placeholder="GSM"
                          />
                        ) : (
                          <span>{item.gsm}</span>
                        )}
                      </td>
                    ) : null}

                    {/* F/Width */}
                    {detailIndex === 0 && mergeStates.fWidth ? (
                      <td className="border-r border-black p-2 text-center" rowSpan={item.details.length}>
                        {isEditMode ? (
                          <Input
                            value={item.fWidthInch}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateItemField(item.id, "fWidthInch", e.target.value)}
                            className="w-20 h-8 text-center p-1"
                            placeholder="F/Width"
                          />
                        ) : (
                          <span>{item.fWidthInch}</span>
                        )}
                      </td>
                    ) : !mergeStates.fWidth ? (
                      <td className="border-r border-black p-2 text-center">
                        {isEditMode ? (
                          <Input
                            value={item.fWidthInch}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateItemField(item.id, "fWidthInch", e.target.value)}
                            className="w-20 h-8 text-center p-1"
                            placeholder="F/Width"
                          />
                        ) : (
                          <span>{item.fWidthInch}</span>
                        )}
                      </td>
                    ) : null}

                    {/* Quality */}
                    {detailIndex === 0 && mergeStates.quality ? (
                      <td className="border-r border-black p-2 text-center" rowSpan={item.details.length}>
                        {isEditMode ? (
                          <Input
                            value={item.quality}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateItemField(item.id, "quality", e.target.value)}
                            className="w-20 h-8 text-center p-1"
                            placeholder="Quality"
                          />
                        ) : (
                          <span>{item.quality}</span>
                        )}
                      </td>
                    ) : !mergeStates.quality ? (
                      <td className="border-r border-black p-2 text-center">
                        {isEditMode ? (
                          <Input
                            value={item.quality}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateItemField(item.id, "quality", e.target.value)}
                            className="w-20 h-8 text-center p-1"
                            placeholder="Quality"
                          />
                        ) : (
                          <span>{item.quality}</span>
                        )}
                      </td>
                    ) : null}

                    {/* Nature of Work */}
                    {detailIndex === 0 && mergeStates.natureOfWork ? (
                      <td className="border-r border-black p-2 text-center" rowSpan={item.details.length}>
                        {isEditMode ? (
                          <Input
                            value={item.natureOfWork}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateItemField(item.id, "natureOfWork", e.target.value)}
                            className="w-32 h-8 p-1"
                            placeholder="Nature of Work"
                          />
                        ) : (
                          <span>{item.natureOfWork}</span>
                        )}
                      </td>
                    ) : !mergeStates.natureOfWork ? (
                      <td className="border-r border-black p-2 text-center">
                        {isEditMode ? (
                          <Input
                            value={item.natureOfWork}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateItemField(item.id, "natureOfWork", e.target.value)}
                            className="w-32 h-8 p-1"
                            placeholder="Nature of Work"
                          />
                        ) : (
                          <span>{item.natureOfWork}</span>
                        )}
                      </td>
                    ) : null}

                    {/* Colour - always separate, never merged */}
                    <td className="border-r border-black p-2">
                      {isEditMode ? (
                        <Input
                          value={detail.colour}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateDetailField(item.id, detail.id, "colour", e.target.value)}
                          className="w-24 h-8 p-1"
                          placeholder="Colour"
                        />
                      ) : (
                        <span>{detail.colour}</span>
                      )}
                    </td>

                    {/* Qty - always separate, never merged */}
                    <td className="border-r border-black p-2 text-center">
                      {isEditMode ? (
                        <Input
                          type="number"
                          value={detail.qty}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            updateDetailField(item.id, detail.id, "qty", Number.parseInt(e.target.value) || 0)
                          }
                          className="w-20 h-8 text-center p-1"
                        />
                      ) : (
                        <span>{detail.qty.toLocaleString()}</span>
                      )}
                    </td>

                    {/* Rate - Good column */}
                    <td className="border-r border-black p-2">
                      {isEditMode ? (
                        <Input
                          value={detail.rate}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateDetailField(item.id, detail.id, "rate", e.target.value)}
                          className="w-32 h-8 p-1"
                          placeholder="Rate"
                        />
                      ) : (
                        <span>{detail.rate}</span>
                      )}
                    </td>

                    {/* Remarks */}
                    <td className="border-r border-black p-2">
                      {isEditMode ? (
                        <Input
                          value={detail.remarks}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateDetailField(item.id, detail.id, "remarks", e.target.value)}
                          className="w-24 h-8 p-1"
                          placeholder="Remarks"
                        />
                      ) : (
                        <span>{detail.remarks}</span>
                      )}
                    </td>

                    {/* Swatch */}
                    <td className="border-r border-black p-2 text-center">
                      {isEditMode ? (
                        <div className="flex items-center gap-1">
                          <Input
                            value={detail.swatch}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateDetailField(item.id, detail.id, "swatch", e.target.value)}
                            className="w-12 h-8 p-1 text-center"
                            placeholder="Y/N"
                          />
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeDetailRow(item.id, detail.id)}
                            className="h-6 w-6 p-0"
                            title="Remove row"
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </div>
                      ) : (
                        <span>{detail.swatch}</span>
                      )}
                    </td>
                  </tr>
                ))}

                {isEditMode && (
                  <tr>
                    <td colSpan={13} className="border-b border-black p-2 bg-green-50">
                      <div className="flex gap-2 justify-end">
                        <Button
                          size="sm"
                          onClick={() => addDetailRow(item.id)}
                          className="flex items-center gap-1 bg-green-600 hover:bg-green-700"
                        >
                          <Plus className="w-3 h-3" />
                          Add Color Row
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-1"
                        >
                          <X className="w-3 h-3" />
                          Remove Fabric Item
                        </Button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}

            {/* Empty rows for spacing */}
            {!isEditMode &&
              Array.from({ length: 10 }).map((_, i) => (
                <tr key={`empty-${i}`} className="border-b border-black">
                  <td className="border-r border-black p-3"></td>
                  <td className="border-r border-black p-3"></td>
                  <td className="border-r border-black p-3"></td>
                  <td className="border-r border-black p-3"></td>
                  <td className="border-r border-black p-3"></td>
                  <td className="border-r border-black p-3"></td>
                  <td className="border-r border-black p-3"></td>
                  <td className="border-r border-black p-3"></td>
                  <td className="border-r border-black p-3"></td>
                  <td className="border-r border-black p-3"></td>
                  <td className="border-r border-black p-3"></td>
                  <td className="border-r border-black p-3"></td>
                  <td className="p-3"></td>
                </tr>
              ))}

            {/* Total Row */}
            <tr className="border-t-2 border-black bg-gray-100">
              <td colSpan={9} className="border-r border-black p-2 text-right font-bold">
                Total Qty (Yds) =
              </td>
              <td className="border-r border-black p-2 text-center font-bold">{totalQty.toLocaleString()}</td>
              <td colSpan={3} className="p-2"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="text-sm">Tear:------------------</div>
        <div className="text-sm">Tensile:------------------</div>
      </div>

      <div className="grid grid-cols-3 gap-8 mt-16">
        <div className="text-center">
          <div className="border-t-2 border-black pt-2 mt-12">
            <p className="font-bold">Prepared By</p>
          </div>
        </div>
        <div className="text-center">
          <div className="border-t-2 border-black pt-2 mt-12">
            <p className="font-bold">Authorized Signature</p>
            <p className="font-bold">G.M. (Export)</p>
          </div>
        </div>
        <div className="text-center">
          <div className="border-t-2 border-black pt-2 mt-12">
            <p className="font-bold">Authorized Approval</p>
            <p className="font-bold">(Managing Director)</p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-bold mb-2 text-blue-900">Table Cell Merging Status:</h3>
        <div className="text-sm space-y-2 text-blue-800">
          <p>
            <strong>Currently Merged Columns:</strong>
          </p>
          <ul className="list-disc ml-6 space-y-1">
            {mergeStates.sl && (
              <li>S/L column - Merged vertically across all color detail rows for each fabric item</li>
            )}
            {mergeStates.fabricDesc && (
              <li>Fabrics Description - Merged horizontally (3 columns) and vertically across all detail rows</li>
            )}
            {mergeStates.gsm && <li>GSM - Merged vertically across detail rows (empty to match original image)</li>}
            {mergeStates.fWidth && <li>F/Width - Merged vertically across detail rows</li>}
            {mergeStates.quality && <li>Quality - Merged vertically across detail rows</li>}
            {mergeStates.natureOfWork && <li>Nature of Work - Merged vertically across detail rows</li>}
          </ul>
          <p className="mt-2">
            <strong>Never Merged (Always Individual):</strong>
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Colour, Qty (yds), Rate, Good, Remarks, Swatch - Individual cells for each detail row</li>
          </ul>
        </div>
      </div>
    </Card>
  )
}
