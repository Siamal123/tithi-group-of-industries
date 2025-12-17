(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 4590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6528)), "F:\\tithi-work-order\\app\\page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1921)), "F:\\tithi-work-order\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["F:\\tithi-work-order\\app\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 826:
/***/ (() => {



/***/ }),

/***/ 90:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 905))

/***/ }),

/***/ 9740:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23))

/***/ }),

/***/ 905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ WorkOrderForm)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./components/ui/card.tsx


const Card = /*#__PURE__*/ react_.forwardRef(({ className = "", ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: `rounded-lg border bg-card text-card-foreground shadow-sm ${className}`,
        ...props
    }));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react_.forwardRef(({ className = "", ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: `flex flex-col space-y-1.5 p-6 ${className}`,
        ...props
    }));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react_.forwardRef(({ className = "", ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("h3", {
        ref: ref,
        className: `text-2xl font-semibold leading-none tracking-tight ${className}`,
        ...props
    }));
CardTitle.displayName = "CardTitle";
const CardContent = /*#__PURE__*/ react_.forwardRef(({ className = "", ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        className: `p-6 pt-0 ${className}`,
        ...props
    }));
CardContent.displayName = "CardContent";


;// CONCATENATED MODULE: ./components/ui/button.tsx


const Button = /*#__PURE__*/ react_.forwardRef(({ className = "", variant = "default", size = "default", ...props }, ref)=>{
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50";
    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-gray-300 bg-white hover:bg-gray-100",
        ghost: "hover:bg-gray-100",
        destructive: "bg-red-600 text-white hover:bg-red-700"
    };
    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`,
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";


;// CONCATENATED MODULE: ./components/ui/checkbox.tsx


const Checkbox = /*#__PURE__*/ react_.forwardRef(({ className = "", onCheckedChange, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("input", {
        type: "checkbox",
        className: `h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 ${className}`,
        ref: ref,
        onChange: (e)=>onCheckedChange?.(e.target.checked),
        ...props
    }));
Checkbox.displayName = "Checkbox";


;// CONCATENATED MODULE: ./components/ui/label.tsx


const Label = /*#__PURE__*/ react_.forwardRef(({ className = "", ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("label", {
        ref: ref,
        className: `text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`,
        ...props
    }));
Label.displayName = "Label";


;// CONCATENATED MODULE: ./components/ui/input.tsx


const Input = /*#__PURE__*/ react_.forwardRef(({ className = "", type, ...props }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        type: type,
        className: `flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`,
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(6206);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/plus.js
var plus = __webpack_require__(2385);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/square-pen.js
var square_pen = __webpack_require__(4010);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/save.js
var save = __webpack_require__(2995);
;// CONCATENATED MODULE: ./components/work-order-form.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











const AVAILABLE_COLUMNS = [
    {
        id: "sl",
        label: "S/L Column",
        key: "mergeSL"
    },
    {
        id: "fabricDesc",
        label: "Fabric Description",
        key: "mergeFabricDesc"
    },
    {
        id: "gsm",
        label: "GSM",
        key: "mergeGSM"
    },
    {
        id: "fWidth",
        label: "F/Width",
        key: "mergeFWidth"
    },
    {
        id: "quality",
        label: "Quality",
        key: "mergeQuality"
    },
    {
        id: "natureOfWork",
        label: "Nature of Work",
        key: "mergeNatureOfWork"
    }
];
function WorkOrderForm() {
    const [isEditMode, setIsEditMode] = (0,react_.useState)(false);
    const [workOrderItems, setWorkOrderItems] = (0,react_.useState)([
        {
            id: "1",
            sl: 1,
            fabricDescription: "16x10/112x56 Twill",
            gsm: "",
            fWidthInch: "57/58",
            quality: "N/P",
            natureOfWork: "Reactive Dyeing",
            details: [
                {
                    id: "1-1",
                    colour: "Black",
                    qty: 3000,
                    rate: "BDT.43.00 Tk.",
                    remarks: "",
                    swatch: "No"
                },
                {
                    id: "1-2",
                    colour: "Khaki",
                    qty: 2100,
                    rate: "BDT.38.00 Tk.",
                    remarks: "",
                    swatch: "Yes"
                }
            ]
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
                {
                    id: "2-1",
                    colour: "Khaki",
                    qty: 1155,
                    rate: "",
                    remarks: "",
                    swatch: "Yes"
                },
                {
                    id: "2-2",
                    colour: "Burgundy",
                    qty: 1000,
                    rate: "BDT.40.00 Tk.",
                    remarks: "",
                    swatch: '"'
                },
                {
                    id: "2-3",
                    colour: "Brown",
                    qty: 1000,
                    rate: "",
                    remarks: "",
                    swatch: '"'
                }
            ]
        }
    ]);
    const [mergeStates, setMergeStates] = (0,react_.useState)({
        sl: true,
        fabricDesc: true,
        gsm: true,
        fWidth: true,
        quality: true,
        natureOfWork: true
    });
    const [activeColumns, setActiveColumns] = (0,react_.useState)(AVAILABLE_COLUMNS.map((col)=>col.id));
    const [showAddColumn, setShowAddColumn] = (0,react_.useState)(false);
    const removeColumn = (columnId)=>{
        console.log("[v0] Removing column:", columnId);
        setActiveColumns((prev)=>prev.filter((id)=>id !== columnId));
        // Disable merge for the removed column
        setMergeStates((prev)=>({
                ...prev,
                [columnId]: false
            }));
    };
    const addColumn = (columnId)=>{
        console.log("[v0] Adding column:", columnId);
        if (!activeColumns.includes(columnId)) {
            setActiveColumns((prev)=>[
                    ...prev,
                    columnId
                ]);
        }
        setShowAddColumn(false);
    };
    const toggleMerge = (columnId, checked)=>{
        console.log("[v0] Toggling merge for", columnId, "to", checked);
        setMergeStates((prev)=>({
                ...prev,
                [columnId]: checked
            }));
    };
    const availableToAdd = AVAILABLE_COLUMNS.filter((col)=>!activeColumns.includes(col.id));
    const totalQty = workOrderItems.reduce((sum, item)=>sum + item.details.reduce((detailSum, detail)=>detailSum + detail.qty, 0), 0);
    const addNewItem = ()=>{
        const newId = String(workOrderItems.length + 1);
        const newItem = {
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
                    swatch: ""
                }
            ]
        };
        setWorkOrderItems([
            ...workOrderItems,
            newItem
        ]);
    };
    const addDetailRow = (itemId)=>{
        setWorkOrderItems(workOrderItems.map((item)=>{
            if (item.id === itemId) {
                const newDetailId = `${itemId}-${item.details.length + 1}`;
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
                            swatch: ""
                        }
                    ]
                };
            }
            return item;
        }));
    };
    const removeItem = (itemId)=>{
        setWorkOrderItems(workOrderItems.filter((item)=>item.id !== itemId));
    };
    const removeDetailRow = (itemId, detailId)=>{
        setWorkOrderItems(workOrderItems.map((item)=>{
            if (item.id === itemId) {
                // Don't allow removing the last detail row
                if (item.details.length <= 1) return item;
                return {
                    ...item,
                    details: item.details.filter((detail)=>detail.id !== detailId)
                };
            }
            return item;
        }));
    };
    const updateItemField = (itemId, field, value)=>{
        setWorkOrderItems(workOrderItems.map((item)=>item.id === itemId ? {
                ...item,
                [field]: value
            } : item));
    };
    const updateDetailField = (itemId, detailId, field, value)=>{
        setWorkOrderItems(workOrderItems.map((item)=>{
            if (item.id === itemId) {
                return {
                    ...item,
                    details: item.details.map((detail)=>detail.id === detailId ? {
                            ...detail,
                            [field]: value
                        } : detail)
                };
            }
            return item;
        }));
    };
    const handleSave = ()=>{
        setIsEditMode(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
        className: "max-w-[1400px] mx-auto p-8 bg-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-6 flex justify-end",
                children: !isEditMode ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
                    onClick: ()=>setIsEditMode(true),
                    className: "flex items-center gap-2 bg-blue-600 hover:bg-blue-700",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(square_pen/* default */.Z, {
                            className: "w-4 h-4"
                        }),
                        "Edit Mode"
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
                    onClick: handleSave,
                    className: "flex items-center gap-2 bg-green-600 hover:bg-green-700",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(save/* default */.Z, {
                            className: "w-4 h-4"
                        }),
                        "Save & Exit Edit Mode"
                    ]
                })
            }),
            isEditMode && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-6 p-4 bg-gray-100 border border-gray-300 rounded-lg",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "font-bold text-gray-900",
                                children: "Table Cell Merge Controls:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
                                size: "sm",
                                variant: "outline",
                                onClick: ()=>setShowAddColumn(!showAddColumn),
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(plus/* default */.Z, {
                                        className: "w-4 h-4"
                                    }),
                                    showAddColumn ? "Hide" : "Add",
                                    " Column Control"
                                ]
                            })
                        ]
                    }),
                    showAddColumn && availableToAdd.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-4 p-3 bg-white border border-gray-300 rounded-md",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-sm font-medium mb-2",
                                children: "Select column to add merge control:"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 gap-2",
                                children: availableToAdd.map((column)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
                                        size: "sm",
                                        variant: "outline",
                                        onClick: ()=>addColumn(column.id),
                                        className: "justify-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(plus/* default */.Z, {
                                                className: "w-3 h-3 mr-1"
                                            }),
                                            column.label
                                        ]
                                    }, column.id))
                            })
                        ]
                    }),
                    showAddColumn && availableToAdd.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-4 p-3 bg-white border border-gray-300 rounded-md",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: "All columns are already added!"
                        })
                    }),
                    activeColumns.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm text-gray-600 mb-2",
                        children: "No merge controls active. Add columns to enable merging."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: AVAILABLE_COLUMNS.map((column)=>{
                            if (!activeColumns.includes(column.id)) return null;
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-between gap-2 p-2 bg-white rounded border border-gray-200",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center gap-2 flex-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Checkbox, {
                                                id: `merge-${column.id}`,
                                                checked: mergeStates[column.id],
                                                onCheckedChange: (checked)=>toggleMerge(column.id, checked)
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Label, {
                                                htmlFor: `merge-${column.id}`,
                                                className: "cursor-pointer text-sm",
                                                children: [
                                                    "Merge ",
                                                    column.label
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                        size: "sm",
                                        variant: "ghost",
                                        onClick: ()=>removeColumn(column.id),
                                        className: "h-6 w-6 p-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(x/* default */.Z, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                ]
                            }, column.id);
                        })
                    }),
                    activeColumns.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-3 flex gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                size: "sm",
                                onClick: ()=>{
                                    const newStates = {
                                        ...mergeStates
                                    };
                                    activeColumns.forEach((colId)=>{
                                        newStates[colId] = true;
                                    });
                                    setMergeStates(newStates);
                                },
                                children: "Enable All Active Merges"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                size: "sm",
                                variant: "outline",
                                onClick: ()=>{
                                    const newStates = {
                                        ...mergeStates
                                    };
                                    activeColumns.forEach((colId)=>{
                                        newStates[colId] = false;
                                    });
                                    setMergeStates(newStates);
                                },
                                children: "Disable All Active Merges"
                            })
                        ]
                    })
                ]
            }),
            isEditMode && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-6 p-4 bg-green-50 border border-green-300 rounded-lg",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between mb-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "font-bold text-green-900",
                                children: "Row Management:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
                                size: "sm",
                                onClick: addNewItem,
                                className: "flex items-center gap-1 bg-green-600 hover:bg-green-700",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(plus/* default */.Z, {
                                        className: "w-4 h-4"
                                    }),
                                    "Add New Fabric Item"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-sm text-green-700",
                        children: "Add new fabric items (with merge-able rows) or add color detail rows within existing items."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-3 gap-4 mb-6 items-start",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-16 h-16 bg-gray-200 border border-gray-400 flex items-center justify-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-xs font-bold",
                                    children: "LOGO"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-sm font-bold",
                                children: "Tithi Group of Industries"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bg-gray-700 text-white py-2 px-4 font-bold",
                            children: "WORK ORDER"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-xs",
                                children: "Tithi Group of Industries"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-xs",
                                children: "Kotwaliirchar, Madhabdi, Narsingdi."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-3 gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "font-bold",
                                children: "W/ORDER :"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "border-2 border-black px-4 py-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-bold",
                                    children: "T-6582"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "border-2 border-black px-4 py-1 text-right",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "font-bold",
                            children: "Date: 22.03.2025"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid grid-cols-2 mb-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-bold mr-2",
                                    children: "1st Party"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mr-2",
                                    children: ":"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "border border-black px-3 py-1 flex-1",
                                    children: "Tithi Textile Mills (Pvt.) Ltd. (Export)"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid grid-cols-2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "font-bold mr-2",
                                    children: "2nd Party"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "mr-2",
                                    children: ":"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "border border-black px-3 py-1 flex-1 text-center font-bold",
                                    children: "RB Textile"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "border border-black px-2 py-1 inline-block",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-bold",
                        children: "Order Specification"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center mb-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "font-bold text-lg",
                    children: "(Revise Copy)"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-2 border-black mb-6 overflow-x-auto",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                    className: "w-full text-sm",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("thead", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    className: "border-b-2 border-black",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-2 w-12",
                                            children: "S/L"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-2 min-w-[200px]",
                                            colSpan: 3,
                                            children: "Fabrics Description"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-2 w-16",
                                            children: "GSM"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-2 w-20",
                                            children: "F/Width Inch."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-2 w-20",
                                            children: "Quality"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-2 w-32",
                                            children: "Nature Of Work"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-2 w-24",
                                            children: "Colour"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-2 w-20",
                                            children: "Qty. (yds)"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-2 min-w-[150px]",
                                            colSpan: 3,
                                            children: "Rate (TK./Per Yds)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    className: "border-b border-black text-xs",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-1 w-16"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-1 w-16"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-1 w-16"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-1"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-1 w-16",
                                            children: "Good"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-r border-black p-1 w-24",
                                            children: "Remarks"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "p-1 w-16",
                                            children: "Swatch"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                            children: [
                                workOrderItems.map((item, itemIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((react_default()).Fragment, {
                                        children: [
                                            item.details.map((detail, detailIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    className: "border-b border-black hover:bg-gray-50",
                                                    children: [
                                                        detailIndex === 0 && mergeStates.sl ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2 text-center font-bold",
                                                            rowSpan: item.details.length,
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                type: "number",
                                                                value: item.sl,
                                                                onChange: (e)=>updateItemField(item.id, "sl", Number.parseInt(e.target.value) || 0),
                                                                className: "w-12 h-8 text-center p-1"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: item.sl
                                                            })
                                                        }) : !mergeStates.sl ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2 text-center font-bold",
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                type: "number",
                                                                value: item.sl,
                                                                onChange: (e)=>updateItemField(item.id, "sl", Number.parseInt(e.target.value) || 0),
                                                                className: "w-12 h-8 text-center p-1"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: item.sl
                                                            })
                                                        }) : null,
                                                        detailIndex === 0 && mergeStates.fabricDesc ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2",
                                                            colSpan: 3,
                                                            rowSpan: item.details.length,
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                value: item.fabricDescription,
                                                                onChange: (e)=>updateItemField(item.id, "fabricDescription", e.target.value),
                                                                className: "w-full h-8 p-1",
                                                                placeholder: "Fabric Description"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: item.fabricDescription
                                                            })
                                                        }) : !mergeStates.fabricDesc ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2",
                                                            colSpan: 3,
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                value: item.fabricDescription,
                                                                onChange: (e)=>updateItemField(item.id, "fabricDescription", e.target.value),
                                                                className: "w-full h-8 p-1",
                                                                placeholder: "Fabric Description"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: item.fabricDescription
                                                            })
                                                        }) : null,
                                                        detailIndex === 0 && mergeStates.gsm ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2 text-center",
                                                            rowSpan: item.details.length,
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                value: item.gsm,
                                                                onChange: (e)=>updateItemField(item.id, "gsm", e.target.value),
                                                                className: "w-16 h-8 text-center p-1",
                                                                placeholder: "GSM"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: item.gsm
                                                            })
                                                        }) : !mergeStates.gsm ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2 text-center",
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                value: item.gsm,
                                                                onChange: (e)=>updateItemField(item.id, "gsm", e.target.value),
                                                                className: "w-16 h-8 text-center p-1",
                                                                placeholder: "GSM"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: item.gsm
                                                            })
                                                        }) : null,
                                                        detailIndex === 0 && mergeStates.fWidth ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2 text-center",
                                                            rowSpan: item.details.length,
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                value: item.fWidthInch,
                                                                onChange: (e)=>updateItemField(item.id, "fWidthInch", e.target.value),
                                                                className: "w-20 h-8 text-center p-1",
                                                                placeholder: "F/Width"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: item.fWidthInch
                                                            })
                                                        }) : !mergeStates.fWidth ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2 text-center",
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                value: item.fWidthInch,
                                                                onChange: (e)=>updateItemField(item.id, "fWidthInch", e.target.value),
                                                                className: "w-20 h-8 text-center p-1",
                                                                placeholder: "F/Width"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: item.fWidthInch
                                                            })
                                                        }) : null,
                                                        detailIndex === 0 && mergeStates.quality ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2 text-center",
                                                            rowSpan: item.details.length,
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                value: item.quality,
                                                                onChange: (e)=>updateItemField(item.id, "quality", e.target.value),
                                                                className: "w-20 h-8 text-center p-1",
                                                                placeholder: "Quality"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: item.quality
                                                            })
                                                        }) : !mergeStates.quality ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2 text-center",
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                value: item.quality,
                                                                onChange: (e)=>updateItemField(item.id, "quality", e.target.value),
                                                                className: "w-20 h-8 text-center p-1",
                                                                placeholder: "Quality"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: item.quality
                                                            })
                                                        }) : null,
                                                        detailIndex === 0 && mergeStates.natureOfWork ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2 text-center",
                                                            rowSpan: item.details.length,
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                value: item.natureOfWork,
                                                                onChange: (e)=>updateItemField(item.id, "natureOfWork", e.target.value),
                                                                className: "w-32 h-8 p-1",
                                                                placeholder: "Nature of Work"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: item.natureOfWork
                                                            })
                                                        }) : !mergeStates.natureOfWork ? /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2 text-center",
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                value: item.natureOfWork,
                                                                onChange: (e)=>updateItemField(item.id, "natureOfWork", e.target.value),
                                                                className: "w-32 h-8 p-1",
                                                                placeholder: "Nature of Work"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: item.natureOfWork
                                                            })
                                                        }) : null,
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2",
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                value: detail.colour,
                                                                onChange: (e)=>updateDetailField(item.id, detail.id, "colour", e.target.value),
                                                                className: "w-24 h-8 p-1",
                                                                placeholder: "Colour"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: detail.colour
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2 text-center",
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                type: "number",
                                                                value: detail.qty,
                                                                onChange: (e)=>updateDetailField(item.id, detail.id, "qty", Number.parseInt(e.target.value) || 0),
                                                                className: "w-20 h-8 text-center p-1"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: detail.qty.toLocaleString()
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2",
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                value: detail.rate,
                                                                onChange: (e)=>updateDetailField(item.id, detail.id, "rate", e.target.value),
                                                                className: "w-32 h-8 p-1",
                                                                placeholder: "Rate"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: detail.rate
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2",
                                                            children: isEditMode ? /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                value: detail.remarks,
                                                                onChange: (e)=>updateDetailField(item.id, detail.id, "remarks", e.target.value),
                                                                className: "w-24 h-8 p-1",
                                                                placeholder: "Remarks"
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: detail.remarks
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r border-black p-2 text-center",
                                                            children: isEditMode ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                                                                        value: detail.swatch,
                                                                        onChange: (e)=>updateDetailField(item.id, detail.id, "swatch", e.target.value),
                                                                        className: "w-12 h-8 p-1 text-center",
                                                                        placeholder: "Y/N"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                                                        size: "sm",
                                                                        variant: "ghost",
                                                                        onClick: ()=>removeDetailRow(item.id, detail.id),
                                                                        className: "h-6 w-6 p-0",
                                                                        title: "Remove row",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(x/* default */.Z, {
                                                                            className: "w-3 h-3"
                                                                        })
                                                                    })
                                                                ]
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: detail.swatch
                                                            })
                                                        })
                                                    ]
                                                }, detail.id)),
                                            isEditMode && /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    colSpan: 13,
                                                    className: "border-b border-black p-2 bg-green-50",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex gap-2 justify-end",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
                                                                size: "sm",
                                                                onClick: ()=>addDetailRow(item.id),
                                                                className: "flex items-center gap-1 bg-green-600 hover:bg-green-700",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(plus/* default */.Z, {
                                                                        className: "w-3 h-3"
                                                                    }),
                                                                    "Add Color Row"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button, {
                                                                size: "sm",
                                                                variant: "destructive",
                                                                onClick: ()=>removeItem(item.id),
                                                                className: "flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(x/* default */.Z, {
                                                                        className: "w-3 h-3"
                                                                    }),
                                                                    "Remove Fabric Item"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }, item.id)),
                                !isEditMode && Array.from({
                                    length: 10
                                }).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        className: "border-b border-black",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-r border-black p-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-r border-black p-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-r border-black p-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-r border-black p-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-r border-black p-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-r border-black p-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-r border-black p-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-r border-black p-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-r border-black p-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-r border-black p-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-r border-black p-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "border-r border-black p-3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "p-3"
                                            })
                                        ]
                                    }, `empty-${i}`)),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                    className: "border-t-2 border-black bg-gray-100",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            colSpan: 9,
                                            className: "border-r border-black p-2 text-right font-bold",
                                            children: "Total Qty (Yds) ="
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            className: "border-r border-black p-2 text-center font-bold",
                                            children: totalQty.toLocaleString()
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            colSpan: 3,
                                            className: "p-2"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between mb-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-sm",
                        children: "Tear:------------------"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-sm",
                        children: "Tensile:------------------"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-3 gap-8 mt-16",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "border-t-2 border-black pt-2 mt-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "font-bold",
                                children: "Prepared By"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "border-t-2 border-black pt-2 mt-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-bold",
                                    children: "Authorized Signature"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-bold",
                                    children: "G.M. (Export)"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "border-t-2 border-black pt-2 mt-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-bold",
                                    children: "Authorized Approval"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-bold",
                                    children: "(Managing Director)"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "font-bold mb-2 text-blue-900",
                        children: "Table Cell Merging Status:"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-sm space-y-2 text-blue-800",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "Currently Merged Columns:"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "list-disc ml-6 space-y-1",
                                children: [
                                    mergeStates.sl && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "S/L column - Merged vertically across all color detail rows for each fabric item"
                                    }),
                                    mergeStates.fabricDesc && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Fabrics Description - Merged horizontally (3 columns) and vertically across all detail rows"
                                    }),
                                    mergeStates.gsm && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "GSM - Merged vertically across detail rows (empty to match original image)"
                                    }),
                                    mergeStates.fWidth && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "F/Width - Merged vertically across detail rows"
                                    }),
                                    mergeStates.quality && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Quality - Merged vertically across detail rows"
                                    }),
                                    mergeStates.natureOfWork && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Nature of Work - Merged vertically across detail rows"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mt-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "Never Merged (Always Individual):"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "list-disc ml-6 space-y-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: "Colour, Qty (yds), Rate, Good, Remarks, Swatch - Individual cells for each detail row"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7272);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);


const metadata = {
    title: "Tithi Work Order",
    description: "Work order management system"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 6528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./components/work-order-form.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`F:\tithi-work-order\components\work-order-form.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const work_order_form = (__default__);
;// CONCATENATED MODULE: ./app/page.tsx


function Home() {
    return /*#__PURE__*/ jsx_runtime_.jsx("main", {
        className: "min-h-screen bg-gray-50 p-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx(work_order_form, {})
    });
}


/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [535], () => (__webpack_exec__(4590)));
module.exports = __webpack_exports__;

})();