"use strict";
(self["webpackChunkonline_store"] = self["webpackChunkonline_store"] || []).push([["src_main_resources_static_js_components_TasksPage_js"],{

/***/ "./src/main/resources/static/js/components/TasksPage.js":
/*!**************************************************************!*\
  !*** ./src/main/resources/static/js/components/TasksPage.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TasksPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-D52XG6IA.mjs");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiClient */ "./src/main/resources/static/js/components/apiClient.js");
/* harmony import */ var _css_TasksPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/TasksPage.css */ "./src/main/resources/static/css/TasksPage.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



 // Import the configured Axios instance

function TasksPage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)(),
    projectId = _useParams.projectId;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    tasks = _useState2[0],
    setTasks = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    project = _useState4[0],
    setProject = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var token = localStorage.getItem("token");
    _apiClient__WEBPACK_IMPORTED_MODULE_1__["default"].get("/projects/".concat(projectId), {
      headers: {
        Authorization: "Bearer ".concat(token)
      }
    }).then(function (response) {
      return setProject(response.data);
    })["catch"](function (error) {
      return console.error("Error fetching project:", error);
    });
    _apiClient__WEBPACK_IMPORTED_MODULE_1__["default"].get("/tasks/project/".concat(projectId), {
      headers: {
        Authorization: "Bearer ".concat(token)
      }
    }).then(function (response) {
      return setTasks(response.data);
    })["catch"](function (error) {
      return console.error("Error fetching tasks:", error);
    });
  }, [projectId]);

  // Handle drag and drop
  var onDragEnd = function onDragEnd(result) {
    var source = result.source,
      destination = result.destination,
      draggableId = result.draggableId;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }
    var task = tasks.find(function (t) {
      return t.id.toString() === draggableId;
    });
    if (!task) return;

    // Define valid transitions for task statuses
    var validTransitions = {
      NOT_STARTED: ["IN_PROGRESS"],
      IN_PROGRESS: ["COMPLETED"]
    };
    var allowedDestinations = validTransitions[task.status] || [];
    if (!allowedDestinations.includes(destination.droppableId)) {
      return;
    }
    var updatedTasks = tasks.map(function (t) {
      return t.id === task.id ? _objectSpread(_objectSpread({}, t), {}, {
        status: destination.droppableId
      }) : t;
    });
    setTasks(updatedTasks);

    // Update task status on the server
    _apiClient__WEBPACK_IMPORTED_MODULE_1__["default"].put("/tasks/".concat(task.id), _objectSpread(_objectSpread({}, task), {}, {
      status: destination.droppableId
    }), {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("token"))
      }
    })["catch"](function (error) {
      return console.error("Error updating task:", error);
    });
  };

  // Filter tasks by status
  var filteredTasks = {
    NOT_STARTED: tasks.filter(function (task) {
      return task.status === "NOT_STARTED";
    }),
    IN_PROGRESS: tasks.filter(function (task) {
      return task.status === "IN_PROGRESS";
    }),
    COMPLETED: tasks.filter(function (task) {
      return task.status === "COMPLETED";
    })
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tasks-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Tasks for project: ", project.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.DragDropContext, {
    onDragEnd: onDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tasks-container"
  }, ["NOT_STARTED", "IN_PROGRESS", "COMPLETED"].map(function (status) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.Droppable, {
      droppableId: status,
      key: status
    }, function (provided) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
        className: "tasks-column",
        ref: provided.innerRef
      }, provided.droppableProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, status.replace("_", " "), " (", filteredTasks[status].length, ")"), filteredTasks[status].length > 0 ? filteredTasks[status].map(function (task, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.Draggable, {
          key: task.id,
          draggableId: task.id.toString(),
          index: index
        }, function (provided) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({
            className: "task-card",
            ref: provided.innerRef
          }, provided.draggableProps, provided.dragHandleProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, task.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, task.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Due: ", task.dueDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Priority: ", task.priority));
        });
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No tasks in this status."), provided.placeholder);
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/projects/".concat(projectId, "/tasks/new"),
    className: "btn btn-success"
  }, "Add Task"));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main/resources/static/css/TasksPage.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main/resources/static/css/TasksPage.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tasks-page {
    padding: 20px;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.tasks-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.tasks-column {
    flex: 1;
    background: #f8f9fa;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    min-height: 300px;
    display: flex;
    flex-direction: column;
}

.tasks-column h2 {
    text-align: center;
    margin-bottom: 15px;
}

.task-card {
    background: white;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    cursor: grab;
}

.task-card:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.task-card h3 {
    margin: 0;
    font-size: 1.2em;
}

.task-card p {
    margin: 5px 0;
    color: #555;
}

.btn {
    display: block;
    width: 150px;
    margin: 20px auto 0;
    padding: 10px 20px;
    text-align: center;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.btn:hover {
    background-color: #0056b3;
}

.tasks-column[data-rbd-droppable-context-id] {
    background-color: #f0f8ff;
    transition: background-color 0.3s ease-in-out;
}

.tasks-column[data-rbd-droppable-context-id]:hover {
    background-color: #e6f7ff;
    transition: background-color 0.3s ease-in-out;
}

.task-card[aria-grabbed="true"] {
    opacity: 0.8;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    cursor: grabbing;
}
`, "",{"version":3,"sources":["webpack://./src/main/resources/static/css/TasksPage.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,OAAO;IACP,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,wCAAwC;IACxC,iBAAiB;IACjB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,wCAAwC;IACxC,mEAAmE;IACnE,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,yCAAyC;AAC7C;;AAEA;IACI,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,6CAA6C;AACjD;;AAEA;IACI,yBAAyB;IACzB,6CAA6C;AACjD;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,yCAAyC;IACzC,gBAAgB;AACpB","sourcesContent":[".tasks-page {\r\n    padding: 20px;\r\n    font-family: Arial, sans-serif;\r\n    background-color: #f9f9f9;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.tasks-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 20px;\r\n}\r\n\r\n.tasks-column {\r\n    flex: 1;\r\n    background: #f8f9fa;\r\n    border-radius: 8px;\r\n    padding: 15px;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n    min-height: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.tasks-column h2 {\r\n    text-align: center;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.task-card {\r\n    background: white;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\r\n    cursor: grab;\r\n}\r\n\r\n.task-card:hover {\r\n    transform: scale(1.03);\r\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.task-card h3 {\r\n    margin: 0;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.task-card p {\r\n    margin: 5px 0;\r\n    color: #555;\r\n}\r\n\r\n.btn {\r\n    display: block;\r\n    width: 150px;\r\n    margin: 20px auto 0;\r\n    padding: 10px 20px;\r\n    text-align: center;\r\n    background-color: #007bff;\r\n    color: white;\r\n    text-decoration: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: #0056b3;\r\n}\r\n\r\n.tasks-column[data-rbd-droppable-context-id] {\r\n    background-color: #f0f8ff;\r\n    transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n.tasks-column[data-rbd-droppable-context-id]:hover {\r\n    background-color: #e6f7ff;\r\n    transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n.task-card[aria-grabbed=\"true\"] {\r\n    opacity: 0.8;\r\n    transform: scale(1.05);\r\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);\r\n    cursor: grabbing;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/main/resources/static/css/TasksPage.css":
/*!*****************************************************!*\
  !*** ./src/main/resources/static/css/TasksPage.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_TasksPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./TasksPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/main/resources/static/css/TasksPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_TasksPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_TasksPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_TasksPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_TasksPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_main_resources_static_js_components_TasksPage_js.bundle.js.map