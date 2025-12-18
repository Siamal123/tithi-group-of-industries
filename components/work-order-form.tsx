"use client"

import React from "react"

import { useState } from "react"
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
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto p-4 mb-4 flex justify-end print:hidden">
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
        <>
          <div className="max-w-[1400px] mx-auto px-4 mb-6">
            <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
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
                          onCheckedChange={(checked) => toggleMerge(column.id, checked as boolean)}
                        />
                        <Label htmlFor={`merge-${column.id}`} className="cursor-pointer text-sm">
                          Merge {column.label}
                        </Label>
                      </div>
                      <Button size="icon-sm" variant="ghost" onClick={() => removeColumn(column.id)}>
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
          </div>

          <div className="max-w-[1400px] mx-auto px-4 mb-6">
            <div className="p-4 bg-green-50 border border-green-300 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-green-900">Row Management:</h3>
                <Button
                  size="sm"
                  onClick={addNewItem}
                  className="flex items-center gap-1 bg-green-600 hover:bg-green-700"
                >
                  <Plus className="w-4 h-4" />
                  Add New Fabric Item
                </Button>
              </div>
              <p className="text-sm text-green-700">
                Add new fabric items (with merge-able rows) or add color detail rows within existing items.
              </p>
            </div>
          </div>
        </>
      )}

      <div className="max-w-[1400px] mx-auto bg-white p-8">
        {/* Header Section */}
        <div className="grid grid-cols-3 gap-8 mb-6 items-start">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 border-2 border-black flex items-center justify-center bg-gray-100">
              <span className="text-xs font-bold">LOGO</span>
            </div>
            <div className="text-sm font-bold leading-tight">
              Tithi Group of
              <br />
              Industries
            </div>
          </div>
          <div className="text-center flex justify-center">
            <div className="bg-gray-700 text-white py-2 px-8 font-bold inline-block">WORK ORDER</div>
          </div>
          <div className="text-right text-xs leading-relaxed">
            <p>Tithi Group of Industries</p>
            <p>Kotwaliirchar,Madhabdi,Narsingdi.</p>
          </div>
        </div>

        {/* W/ORDER and Date Section */}
        <div className="grid grid-cols-3 gap-8 mb-6 items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm">W/ORDER :</span>
            <div className="border-2 border-black px-6 py-1">
              <span className="font-bold">T-6582</span>
            </div>
          </div>
          <div></div>
          <div className="border-2 border-black px-4 py-1 text-center">
            <span className="font-bold">Date: 22.03.2025</span>
          </div>
        </div>

        {/* Party Information */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center max-w-md">
            <span className="font-bold text-sm whitespace-nowrap">1st Party</span>
            <span className="mx-2">:</span>
            <div className="border border-black px-3 py-1 flex-1 text-center">
              Tithi Textile Mills (Pvt.) Ltd. (Export)
            </div>
          </div>
          <div className="flex items-center max-w-md">
            <span className="font-bold text-sm whitespace-nowrap">2nd Party</span>
            <span className="mx-2">:</span>
            <div className="border border-black px-3 py-1 flex-1 text-center font-bold text-lg">RB Textile</div>
          </div>
        </div>

        {/* Order Specification */}
        <div className="mb-2">
          <div className="border border-black px-2 py-1 inline-block">
            <span className="font-bold text-sm">Order Specification</span>
          </div>
        </div>

        {/* Revise Copy */}
        <div className="text-center mb-4">
          <span className="font-bold text-base">(Revise Copy)</span>
        </div>

        {/* Main Table */}
        <div className="border-2 border-black mb-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="border-r border-black p-2 font-bold text-center align-middle" style={{ width: "40px" }}>
                  S/L
                </th>
                <th
                  className="border-r border-black p-2 font-bold text-center align-middle"
                  colSpan={3}
                  style={{ minWidth: "200px" }}
                >
                  Fabrics Description
                </th>
                <th className="border-r border-black p-2 font-bold text-center align-middle" style={{ width: "50px" }}>
                  GSM
                </th>
                <th className="border-r border-black p-2 font-bold text-center align-middle" style={{ width: "60px" }}>
                  F/Width
                  <br />
                  Inch.
                </th>
                <th className="border-r border-black p-2 font-bold text-center align-middle" style={{ width: "60px" }}>
                  Quality
                </th>
                <th className="border-r border-black p-2 font-bold text-center align-middle" style={{ width: "120px" }}>
                  Nature Of Work
                </th>
                <th className="border-r border-black p-2 font-bold text-center align-middle" style={{ width: "80px" }}>
                  Colour
                </th>
                <th className="border-r border-black p-2 font-bold text-center align-middle" style={{ width: "70px" }}>
                  Qty. (yds)
                </th>
                <th
                  className="border-r border-black p-2 font-bold text-center align-middle"
                  colSpan={3}
                  style={{ minWidth: "180px" }}
                >
                  Rate (TK./Per Yds)
                </th>
              </tr>
              <tr className="border-b border-black">
                <th className="border-r border-black p-1"></th>
                <th className="border-r border-black p-1" style={{ width: "50px" }}></th>
                <th className="border-r border-black p-1" style={{ width: "50px" }}></th>
                <th className="border-r border-black p-1" style={{ width: "50px" }}></th>
                <th className="border-r border-black p-1"></th>
                <th className="border-r border-black p-1"></th>
                <th className="border-r border-black p-1"></th>
                <th className="border-r border-black p-1"></th>
                <th className="border-r border-black p-1"></th>
                <th className="border-r border-black p-1"></th>
                <th className="border-r border-black p-1 text-center font-bold text-xs" style={{ width: "60px" }}>
                  Good
                </th>
                <th className="border-r border-black p-1 text-center font-bold text-xs" style={{ width: "70px" }}>
                  Remarks
                </th>
                <th className="p-1 text-center font-bold text-xs" style={{ width: "50px" }}>
                  Swatch
                </th>
              </tr>
            </thead>
            <tbody>
              {workOrderItems.map((item) => (
                <React.Fragment key={item.id}>
                  {item.details.map((detail, detailIndex) => (
                    <tr key={detail.id} className="border-b border-black">
                      {/* S/L Column */}
                      {detailIndex === 0 && mergeStates.sl ? (
                        <td
                          className="border-r border-black p-2 text-center font-bold align-middle"
                          rowSpan={item.details.length}
                        >
                          {isEditMode ? (
                            <Input
                              type="number"
                              value={item.sl}
                              onChange={(e) => updateItemField(item.id, "sl", Number.parseInt(e.target.value) || 0)}
                              className="w-full h-8 text-center"
                            />
                          ) : (
                            item.sl
                          )}
                        </td>
                      ) : !mergeStates.sl ? (
                        <td className="border-r border-black p-2 text-center font-bold align-middle">
                          {isEditMode ? (
                            <Input
                              type="number"
                              value={item.sl}
                              onChange={(e) => updateItemField(item.id, "sl", Number.parseInt(e.target.value) || 0)}
                              className="w-full h-8 text-center"
                            />
                          ) : (
                            item.sl
                          )}
                        </td>
                      ) : null}

                      {/* Fabric Description */}
                      {detailIndex === 0 && mergeStates.fabricDesc ? (
                        <td
                          className="border-r border-black p-2 align-middle"
                          colSpan={3}
                          rowSpan={item.details.length}
                        >
                          {isEditMode ? (
                            <Input
                              value={item.fabricDescription}
                              onChange={(e) => updateItemField(item.id, "fabricDescription", e.target.value)}
                              className="w-full h-8"
                            />
                          ) : (
                            item.fabricDescription
                          )}
                        </td>
                      ) : !mergeStates.fabricDesc ? (
                        <td className="border-r border-black p-2 align-middle" colSpan={3}>
                          {isEditMode ? (
                            <Input
                              value={item.fabricDescription}
                              onChange={(e) => updateItemField(item.id, "fabricDescription", e.target.value)}
                              className="w-full h-8"
                            />
                          ) : (
                            item.fabricDescription
                          )}
                        </td>
                      ) : null}

                      {/* GSM */}
                      {detailIndex === 0 && mergeStates.gsm ? (
                        <td
                          className="border-r border-black p-2 text-center align-middle"
                          rowSpan={item.details.length}
                        >
                          {isEditMode ? (
                            <Input
                              value={item.gsm}
                              onChange={(e) => updateItemField(item.id, "gsm", e.target.value)}
                              className="w-full h-8 text-center"
                            />
                          ) : (
                            item.gsm
                          )}
                        </td>
                      ) : !mergeStates.gsm ? (
                        <td className="border-r border-black p-2 text-center align-middle">
                          {isEditMode ? (
                            <Input
                              value={item.gsm}
                              onChange={(e) => updateItemField(item.id, "gsm", e.target.value)}
                              className="w-full h-8 text-center"
                            />
                          ) : (
                            item.gsm
                          )}
                        </td>
                      ) : null}

                      {/* F/Width */}
                      {detailIndex === 0 && mergeStates.fWidth ? (
                        <td
                          className="border-r border-black p-2 text-center align-middle"
                          rowSpan={item.details.length}
                        >
                          {isEditMode ? (
                            <Input
                              value={item.fWidthInch}
                              onChange={(e) => updateItemField(item.id, "fWidthInch", e.target.value)}
                              className="w-full h-8 text-center"
                            />
                          ) : (
                            item.fWidthInch
                          )}
                        </td>
                      ) : !mergeStates.fWidth ? (
                        <td className="border-r border-black p-2 text-center align-middle">
                          {isEditMode ? (
                            <Input
                              value={item.fWidthInch}
                              onChange={(e) => updateItemField(item.id, "fWidthInch", e.target.value)}
                              className="w-full h-8 text-center"
                            />
                          ) : (
                            item.fWidthInch
                          )}
                        </td>
                      ) : null}

                      {/* Quality */}
                      {detailIndex === 0 && mergeStates.quality ? (
                        <td
                          className="border-r border-black p-2 text-center align-middle"
                          rowSpan={item.details.length}
                        >
                          {isEditMode ? (
                            <Input
                              value={item.quality}
                              onChange={(e) => updateItemField(item.id, "quality", e.target.value)}
                              className="w-full h-8 text-center"
                            />
                          ) : (
                            item.quality
                          )}
                        </td>
                      ) : !mergeStates.quality ? (
                        <td className="border-r border-black p-2 text-center align-middle">
                          {isEditMode ? (
                            <Input
                              value={item.quality}
                              onChange={(e) => updateItemField(item.id, "quality", e.target.value)}
                              className="w-full h-8 text-center"
                            />
                          ) : (
                            item.quality
                          )}
                        </td>
                      ) : null}

                      {/* Nature of Work */}
                      {detailIndex === 0 && mergeStates.natureOfWork ? (
                        <td
                          className="border-r border-black p-2 text-center align-middle"
                          rowSpan={item.details.length}
                        >
                          {isEditMode ? (
                            <Input
                              value={item.natureOfWork}
                              onChange={(e) => updateItemField(item.id, "natureOfWork", e.target.value)}
                              className="w-full h-8 text-center"
                            />
                          ) : (
                            item.natureOfWork
                          )}
                        </td>
                      ) : !mergeStates.natureOfWork ? (
                        <td className="border-r border-black p-2 text-center align-middle">
                          {isEditMode ? (
                            <Input
                              value={item.natureOfWork}
                              onChange={(e) => updateItemField(item.id, "natureOfWork", e.target.value)}
                              className="w-full h-8 text-center"
                            />
                          ) : (
                            item.natureOfWork
                          )}
                        </td>
                      ) : null}

                      {/* Colour - Always separate */}
                      <td className="border-r border-black p-2 text-center align-middle">
                        {isEditMode ? (
                          <div className="flex items-center gap-1">
                            <Input
                              value={detail.colour}
                              onChange={(e) => updateDetailField(item.id, detail.id, "colour", e.target.value)}
                              className="flex-1 h-8"
                            />
                            {item.details.length > 1 && (
                              <Button
                                size="icon-sm"
                                variant="ghost"
                                onClick={() => removeDetailRow(item.id, detail.id)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        ) : (
                          detail.colour
                        )}
                      </td>

                      {/* Qty */}
                      <td className="border-r border-black p-2 text-center align-middle">
                        {isEditMode ? (
                          <Input
                            type="number"
                            value={detail.qty}
                            onChange={(e) =>
                              updateDetailField(item.id, detail.id, "qty", Number.parseInt(e.target.value) || 0)
                            }
                            className="w-full h-8 text-center"
                          />
                        ) : (
                          detail.qty.toLocaleString()
                        )}
                      </td>

                      {/* Rate - Good column */}
                      <td className="border-r border-black p-2 text-center align-middle">
                        {isEditMode ? (
                          <Input
                            value={detail.rate}
                            onChange={(e) => updateDetailField(item.id, detail.id, "rate", e.target.value)}
                            className="w-full h-8"
                          />
                        ) : (
                          detail.rate
                        )}
                      </td>

                      {/* Remarks */}
                      <td className="border-r border-black p-2 text-center align-middle">
                        {isEditMode ? (
                          <Input
                            value={detail.remarks}
                            onChange={(e) => updateDetailField(item.id, detail.id, "remarks", e.target.value)}
                            className="w-full h-8"
                          />
                        ) : (
                          detail.remarks
                        )}
                      </td>

                      {/* Swatch */}
                      <td className="p-2 text-center align-middle">
                        {isEditMode ? (
                          <Input
                            value={detail.swatch}
                            onChange={(e) => updateDetailField(item.id, detail.id, "swatch", e.target.value)}
                            className="w-full h-8 text-center"
                          />
                        ) : (
                          detail.swatch
                        )}
                      </td>
                    </tr>
                  ))}

                  {/* Add Color Row Button - Only in Edit Mode */}
                  {isEditMode && (
                    <tr className="border-b border-black bg-blue-50">
                      <td colSpan={13} className="p-2 text-center">
                        <Button
                          size="sm"
                          onClick={() => addDetailRow(item.id)}
                          className="flex items-center gap-1 mx-auto bg-blue-600 hover:bg-blue-700"
                        >
                          <Plus className="w-4 h-4" />
                          Add Color Row to Item {item.sl}
                        </Button>
                      </td>
                    </tr>
                  )}

                  {/* Item Remove Button - Only in Edit Mode */}
                  {isEditMode && (
                    <tr className="border-b-2 border-black bg-red-50">
                      <td colSpan={13} className="p-2 text-center">
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-1 mx-auto"
                        >
                          <X className="w-4 h-4" />
                          Remove Entire Item {item.sl}
                        </Button>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}

              {/* Empty Rows */}
              {[...Array(8)].map((_, i) => (
                <tr key={`empty-${i}`} className="border-b border-black">
                  <td className="border-r border-black p-3"></td>
                  <td className="border-r border-black p-3" colSpan={3}></td>
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
              <tr className="border-b-2 border-black font-bold">
                <td className="border-r border-black p-2" colSpan={8}></td>
                <td className="border-r border-black p-2 text-center">Total Qty (Yds) =</td>
                <td className="border-r border-black p-2 text-center">{totalQty.toLocaleString()}</td>
                <td className="border-r border-black p-2"></td>
                <td className="border-r border-black p-2"></td>
                <td className="p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tear and Tensile Section */}
        <div className="mb-12 flex gap-12 text-sm">
          <div>
            <span className="font-bold">Tear:</span>
            <span className="ml-2">------------------</span>
          </div>
          <div>
            <span className="font-bold">Tensile:</span>
            <span className="ml-2">------------------</span>
          </div>
        </div>

        {/* Signature Section */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="border-t-2 border-black pt-2 mb-1">
              <span className="font-bold">Prepared By</span>
            </div>
          </div>
          <div className="text-center">
            <div className="border-t-2 border-black pt-2 mb-1">
              <span className="font-bold">Authorized Signature</span>
            </div>
            <div className="font-bold">G.M. (Export)</div>
          </div>
          <div className="text-center">
            <div className="border-t-2 border-black pt-2 mb-1">
              <span className="font-bold">Authorized Approval</span>
            </div>
            <div className="font-bold">(Managing Director)</div>
          </div>
        </div>
      </div>
    </div>
  )
}
