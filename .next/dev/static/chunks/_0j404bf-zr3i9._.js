(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-round.js [app-client] (ecmascript) <export default as UserRound>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoreProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/StoreProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Navbar() {
    _s();
    const { cartCount, wishlist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoreProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const submitSearch = (event)=>{
        event.preventDefault();
        router.push(`/products${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ""}`);
        setMobileOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "site-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "topbar-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "brand",
                                href: "/",
                                "aria-label": "Shopkart home",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "brand-word",
                                        children: [
                                            "shopkart",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 23,
                                                columnNumber: 104
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 23,
                                        columnNumber: 67
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "brand-tagline",
                                        children: [
                                            "Explore ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Plus"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 23,
                                                columnNumber: 165
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                children: "✦"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 23,
                                                columnNumber: 177
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 23,
                                        columnNumber: 125
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 23,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "search-form",
                                onSubmit: submitSearch,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 19
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 24,
                                        columnNumber: 61
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        "aria-label": "Search products",
                                        value: query,
                                        onChange: (event)=>setQuery(event.target.value),
                                        placeholder: "Search for products, brands and more"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 24,
                                        columnNumber: 81
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        children: "Search"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 24,
                                        columnNumber: 235
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 24,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "desktop-actions",
                                "aria-label": "Main navigation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "account-link",
                                        href: "/orders",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 26,
                                                columnNumber: 55
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "My Account"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 26,
                                                columnNumber: 78
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 26,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: "seller-link",
                                        href: "/about",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 27,
                                                columnNumber: 53
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Become a Seller"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 27,
                                                columnNumber: 72
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 27,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: `icon-link${pathname === "/wishlist" ? " nav-active" : ""}`,
                                        href: "/wishlist",
                                        "aria-label": `Wishlist, ${wishlist.length} items`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "nav-icon-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 186
                                                    }, this),
                                                    wishlist.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        className: "nav-count",
                                                        children: wishlist.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 229
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 28,
                                                columnNumber: 154
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Wishlist"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 28,
                                                columnNumber: 283
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 28,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: `icon-link${pathname === "/cart" ? " nav-active" : ""}`,
                                        href: "/cart",
                                        "aria-label": `Cart, ${cartCount} items`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "nav-icon-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                        size: 21
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 168
                                                    }, this),
                                                    cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        className: "nav-count",
                                                        children: cartCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 212
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 29,
                                                columnNumber: 136
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Cart"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 29,
                                                columnNumber: 260
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 29,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 25,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mobile-menu-button",
                                onClick: ()=>setMobileOpen((open)=>!open),
                                "aria-label": mobileOpen ? "Close menu" : "Open menu",
                                children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 23
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 31,
                                    columnNumber: 160
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 23
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 31,
                                    columnNumber: 178
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 31,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 22,
                        columnNumber: 29
                    }, this),
                    mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "search-form mobile-search",
                                onSubmit: submitSearch,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 34,
                                        columnNumber: 75
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: query,
                                        onChange: (event)=>setQuery(event.target.value),
                                        placeholder: "Search products"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 34,
                                        columnNumber: 95
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        children: "Go"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 34,
                                        columnNumber: 199
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 34,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/orders",
                                onClick: ()=>setMobileOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRound$3e$__["UserRound"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 35,
                                        columnNumber: 65
                                    }, this),
                                    " My Account & Orders"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 35,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/wishlist",
                                onClick: ()=>setMobileOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 36,
                                        columnNumber: 67
                                    }, this),
                                    " Wishlist ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mobile-count",
                                        children: wishlist.length
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 36,
                                        columnNumber: 96
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 36,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/cart",
                                onClick: ()=>setMobileOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 37,
                                        columnNumber: 63
                                    }, this),
                                    " Cart ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mobile-count",
                                        children: cartCount
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 37,
                                        columnNumber: 95
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 37,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about",
                                onClick: ()=>setMobileOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 38,
                                        columnNumber: 64
                                    }, this),
                                    " Become a Seller"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 38,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 33,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "category-nav",
                "aria-label": "Browse categories",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "category-nav-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/categories",
                            className: `category-nav-item${pathname === "/categories" ? " active" : ""}`,
                            children: "All categories"
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 40,
                            columnNumber: 102
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].slice(0, 7).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/products?category=${encodeURIComponent(category.name)}`,
                                className: "category-nav-item",
                                children: category.name
                            }, category.name, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 40,
                                columnNumber: 268
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/products?sort=discount",
                            className: "category-nav-item offers-link",
                            children: [
                                "Top offers ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "✦"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 40,
                                    columnNumber: 503
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 40,
                            columnNumber: 413
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.tsx",
                    lineNumber: 40,
                    columnNumber: 66
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_s(Navbar, "hycd8yMPslIgUoGWhwHug9LaCoo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$StoreProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/StoreProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreProvider",
    ()=>StoreProvider,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/products.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const StoreContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function readStorage(key, fallback) {
    try {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : fallback;
    } catch  {
        return fallback;
    }
}
function StoreProvider({ children }) {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wishlist, setWishlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recentlyViewed, setRecentlyViewed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreProvider.useEffect": ()=>{
            // Load persisted state after mount to keep server and initial client markup identical.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCart(readStorage("shopkart-cart", []));
            setWishlist(readStorage("shopkart-wishlist", []));
            setRecentlyViewed(readStorage("shopkart-recent", []));
            setOrders(readStorage("shopkart-orders", []));
            setReady(true);
        }
    }["StoreProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoreProvider.useEffect": ()=>{
            if (!ready) return;
            localStorage.setItem("shopkart-cart", JSON.stringify(cart));
            localStorage.setItem("shopkart-wishlist", JSON.stringify(wishlist));
            localStorage.setItem("shopkart-recent", JSON.stringify(recentlyViewed));
            localStorage.setItem("shopkart-orders", JSON.stringify(orders));
        }
    }["StoreProvider.useEffect"], [
        cart,
        wishlist,
        recentlyViewed,
        orders,
        ready
    ]);
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[addToCart]": (productId, quantity = 1)=>{
            setCart({
                "StoreProvider.useCallback[addToCart]": (current)=>{
                    const line = current.find({
                        "StoreProvider.useCallback[addToCart].line": (item)=>item.productId === productId
                    }["StoreProvider.useCallback[addToCart].line"]);
                    return line ? current.map({
                        "StoreProvider.useCallback[addToCart]": (item)=>item.productId === productId ? {
                                ...item,
                                quantity: item.quantity + quantity
                            } : item
                    }["StoreProvider.useCallback[addToCart]"]) : [
                        ...current,
                        {
                            productId,
                            quantity
                        }
                    ];
                }
            }["StoreProvider.useCallback[addToCart]"]);
        }
    }["StoreProvider.useCallback[addToCart]"], []);
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[removeFromCart]": (productId)=>setCart({
                "StoreProvider.useCallback[removeFromCart]": (current)=>current.filter({
                        "StoreProvider.useCallback[removeFromCart]": (item)=>item.productId !== productId
                    }["StoreProvider.useCallback[removeFromCart]"])
            }["StoreProvider.useCallback[removeFromCart]"])
    }["StoreProvider.useCallback[removeFromCart]"], []);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[updateQuantity]": (productId, quantity)=>{
            if (quantity < 1) return;
            setCart({
                "StoreProvider.useCallback[updateQuantity]": (current)=>current.map({
                        "StoreProvider.useCallback[updateQuantity]": (item)=>item.productId === productId ? {
                                ...item,
                                quantity
                            } : item
                    }["StoreProvider.useCallback[updateQuantity]"])
            }["StoreProvider.useCallback[updateQuantity]"]);
        }
    }["StoreProvider.useCallback[updateQuantity]"], []);
    const toggleWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[toggleWishlist]": (productId)=>{
            setWishlist({
                "StoreProvider.useCallback[toggleWishlist]": (current)=>current.includes(productId) ? current.filter({
                        "StoreProvider.useCallback[toggleWishlist]": (id)=>id !== productId
                    }["StoreProvider.useCallback[toggleWishlist]"]) : [
                        ...current,
                        productId
                    ]
            }["StoreProvider.useCallback[toggleWishlist]"]);
        }
    }["StoreProvider.useCallback[toggleWishlist]"], []);
    const moveWishlistToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[moveWishlistToCart]": (productId)=>{
            setWishlist({
                "StoreProvider.useCallback[moveWishlistToCart]": (current)=>current.filter({
                        "StoreProvider.useCallback[moveWishlistToCart]": (id)=>id !== productId
                    }["StoreProvider.useCallback[moveWishlistToCart]"])
            }["StoreProvider.useCallback[moveWishlistToCart]"]);
            setCart({
                "StoreProvider.useCallback[moveWishlistToCart]": (current)=>current.some({
                        "StoreProvider.useCallback[moveWishlistToCart]": (item)=>item.productId === productId
                    }["StoreProvider.useCallback[moveWishlistToCart]"]) ? current.map({
                        "StoreProvider.useCallback[moveWishlistToCart]": (item)=>item.productId === productId ? {
                                ...item,
                                quantity: item.quantity + 1
                            } : item
                    }["StoreProvider.useCallback[moveWishlistToCart]"]) : [
                        ...current,
                        {
                            productId,
                            quantity: 1
                        }
                    ]
            }["StoreProvider.useCallback[moveWishlistToCart]"]);
        }
    }["StoreProvider.useCallback[moveWishlistToCart]"], []);
    const trackProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[trackProduct]": (productId)=>{
            setRecentlyViewed({
                "StoreProvider.useCallback[trackProduct]": (current)=>[
                        productId,
                        ...current.filter({
                            "StoreProvider.useCallback[trackProduct]": (id)=>id !== productId
                        }["StoreProvider.useCallback[trackProduct]"])
                    ].slice(0, 8)
            }["StoreProvider.useCallback[trackProduct]"]);
        }
    }["StoreProvider.useCallback[trackProduct]"], []);
    const placeOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StoreProvider.useCallback[placeOrder]": (address, payment)=>{
            const id = `SK${Date.now().toString().slice(-9)}`;
            const total = cart.reduce({
                "StoreProvider.useCallback[placeOrder].total": (sum, item)=>{
                    const product = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find({
                        "StoreProvider.useCallback[placeOrder].total.product": (entry)=>entry.id === item.productId
                    }["StoreProvider.useCallback[placeOrder].total.product"]);
                    return sum + (product?.price ?? 0) * item.quantity;
                }
            }["StoreProvider.useCallback[placeOrder].total"], 0);
            setOrders({
                "StoreProvider.useCallback[placeOrder]": (current)=>[
                        {
                            id,
                            createdAt: new Date().toISOString(),
                            items: cart,
                            total,
                            address,
                            payment
                        },
                        ...current
                    ]
            }["StoreProvider.useCallback[placeOrder]"]);
            setCart([]);
            return id;
        }
    }["StoreProvider.useCallback[placeOrder]"], [
        cart
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StoreProvider.useMemo[value]": ()=>({
                cart,
                wishlist,
                recentlyViewed,
                orders,
                cartCount: cart.reduce({
                    "StoreProvider.useMemo[value]": (total, item)=>total + item.quantity
                }["StoreProvider.useMemo[value]"], 0),
                addToCart,
                removeFromCart,
                updateQuantity,
                toggleWishlist,
                moveWishlistToCart,
                trackProduct,
                placeOrder
            })
    }["StoreProvider.useMemo[value]"], [
        cart,
        wishlist,
        recentlyViewed,
        orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        moveWishlistToCart,
        trackProduct,
        placeOrder
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoreContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/StoreProvider.tsx",
        lineNumber: 99,
        columnNumber: 10
    }, this);
}
_s(StoreProvider, "rGBb/vWHf4B75FSWvduHEpbhekQ=");
_c = StoreProvider;
function useStore() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StoreContext);
    if (!context) throw new Error("useStore must be used within StoreProvider");
    return context;
}
_s1(useStore, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "StoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "products",
    ()=>products
]);
const image = (id, width = 900)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const products = [
    {
        id: "pixel-9-pro",
        name: "Pixel 9 Pro 5G (Obsidian, 256 GB)",
        brand: "Google",
        category: "Mobiles",
        price: 99999,
        mrp: 109999,
        rating: 4.6,
        reviews: 1824,
        popularity: 98,
        createdAt: "2026-09-10",
        image: image("photo-1511707171634-5f897ff02aa9"),
        images: [
            image("photo-1511707171634-5f897ff02aa9"),
            image("photo-1592899677977-9c10ca588bbd"),
            image("photo-1598327105666-5b89351aff97")
        ],
        description: "Meet the Google Pixel 9 Pro, built for extraordinary photos, helpful AI and a brilliant display. Its advanced camera system captures natural details day or night.",
        specifications: [
            {
                label: "Display",
                value: "6.3 inch Super Actua OLED"
            },
            {
                label: "Processor",
                value: "Google Tensor G4"
            },
            {
                label: "RAM / Storage",
                value: "16 GB / 256 GB"
            },
            {
                label: "Camera",
                value: "50 MP + 48 MP + 48 MP"
            },
            {
                label: "Battery",
                value: "4700 mAh"
            }
        ],
        offer: "Extra ₹5,000 off on exchange"
    },
    {
        id: "iphone-16",
        name: "iPhone 16 (Ultramarine, 128 GB)",
        brand: "Apple",
        category: "Mobiles",
        price: 69999,
        mrp: 79900,
        rating: 4.7,
        reviews: 3290,
        popularity: 100,
        createdAt: "2026-08-21",
        image: image("photo-1592750475338-74b7b21085ab"),
        images: [
            image("photo-1592750475338-74b7b21085ab"),
            image("photo-1511707171634-5f897ff02aa9")
        ],
        description: "A powerful everyday iPhone with a stunning Super Retina display, an advanced dual-camera system and the all-new A18 chip.",
        specifications: [
            {
                label: "Display",
                value: "6.1 inch Super Retina XDR"
            },
            {
                label: "Chip",
                value: "Apple A18"
            },
            {
                label: "Storage",
                value: "128 GB"
            },
            {
                label: "Camera",
                value: "48 MP Fusion camera"
            },
            {
                label: "OS",
                value: "iOS 18"
            }
        ],
        offer: "No cost EMI from ₹5,834/month"
    },
    {
        id: "galaxy-s24",
        name: "Galaxy S24 5G (Onyx Black, 256 GB)",
        brand: "Samsung",
        category: "Mobiles",
        price: 64999,
        mrp: 79999,
        rating: 4.5,
        reviews: 2410,
        popularity: 95,
        createdAt: "2026-07-14",
        image: image("photo-1610945265064-0e34e5519bbf"),
        images: [
            image("photo-1610945265064-0e34e5519bbf"),
            image("photo-1598327105666-5b89351aff97")
        ],
        description: "Galaxy AI puts a whole new world of possibilities in your hands. Enjoy a vivid display, pro-grade camera and a design made to last.",
        specifications: [
            {
                label: "Display",
                value: "6.2 inch Dynamic AMOLED 2X"
            },
            {
                label: "Processor",
                value: "Exynos 2400"
            },
            {
                label: "RAM / Storage",
                value: "8 GB / 256 GB"
            },
            {
                label: "Camera",
                value: "50 MP triple camera"
            },
            {
                label: "Battery",
                value: "4000 mAh"
            }
        ],
        offer: "Up to ₹8,000 off with select bank cards"
    },
    {
        id: "sony-headphones",
        name: "WH-1000XM5 Wireless Noise Cancelling Headphones",
        brand: "Sony",
        category: "Electronics",
        price: 24990,
        mrp: 34990,
        rating: 4.6,
        reviews: 860,
        popularity: 91,
        createdAt: "2026-06-11",
        image: image("photo-1505740420928-5e560c06d30e"),
        images: [
            image("photo-1505740420928-5e560c06d30e"),
            image("photo-1546435770-a3e426bf472b")
        ],
        description: "Immerse yourself in your music with industry-leading noise cancellation and exceptionally clear calls, all day long.",
        specifications: [
            {
                label: "Type",
                value: "Over-ear, wireless"
            },
            {
                label: "Battery life",
                value: "Up to 30 hours"
            },
            {
                label: "Connectivity",
                value: "Bluetooth 5.2"
            },
            {
                label: "Noise control",
                value: "Adaptive noise cancelling"
            }
        ],
        offer: "Flat ₹2,000 off with select cards"
    },
    {
        id: "galaxy-watch7",
        name: "Galaxy Watch7 Bluetooth (44 mm)",
        brand: "Samsung",
        category: "Electronics",
        price: 22999,
        mrp: 32999,
        rating: 4.4,
        reviews: 715,
        popularity: 86,
        createdAt: "2026-08-05",
        image: image("photo-1523275335684-37898b6baf30"),
        images: [
            image("photo-1523275335684-37898b6baf30"),
            image("photo-1579586337278-3befd40fd17a")
        ],
        description: "Make every day count with personalized health insights, sleep tracking and a vibrant display that keeps you connected.",
        specifications: [
            {
                label: "Display",
                value: "1.5 inch Super AMOLED"
            },
            {
                label: "Battery",
                value: "Up to 40 hours"
            },
            {
                label: "Water resistance",
                value: "5 ATM + IP68"
            },
            {
                label: "Compatibility",
                value: "Android"
            }
        ],
        offer: "Exchange bonus up to ₹3,000"
    },
    {
        id: "asus-zenbook",
        name: "Zenbook 14 OLED, Intel Core Ultra 5",
        brand: "ASUS",
        category: "Electronics",
        price: 84990,
        mrp: 99990,
        rating: 4.5,
        reviews: 492,
        popularity: 89,
        createdAt: "2026-10-01",
        image: image("photo-1496181133206-80ce9b88a853"),
        images: [
            image("photo-1496181133206-80ce9b88a853"),
            image("photo-1517336714731-489689fd1ca8")
        ],
        description: "A refined, lightweight laptop with a breathtaking OLED display, thoughtful design and performance for work and creativity.",
        specifications: [
            {
                label: "Processor",
                value: "Intel Core Ultra 5"
            },
            {
                label: "Memory",
                value: "16 GB LPDDR5X"
            },
            {
                label: "Storage",
                value: "512 GB SSD"
            },
            {
                label: "Display",
                value: "14 inch 2.8K OLED"
            }
        ],
        offer: "Includes 1 year extended warranty"
    },
    {
        id: "nike-air-max",
        name: "Air Max SC Men's Running Shoes",
        brand: "Nike",
        category: "Fashion",
        price: 5995,
        mrp: 7995,
        rating: 4.3,
        reviews: 1106,
        popularity: 90,
        createdAt: "2026-09-27",
        image: image("photo-1542291026-7eec264c27ff"),
        images: [
            image("photo-1542291026-7eec264c27ff"),
            image("photo-1460353581641-37baddab0fa2")
        ],
        description: "A classic Air Max look made for everyday comfort. Lightweight materials and visible cushioning bring a sporty finish to every outfit.",
        specifications: [
            {
                label: "Ideal for",
                value: "Men"
            },
            {
                label: "Closure",
                value: "Lace-up"
            },
            {
                label: "Sole",
                value: "Rubber"
            },
            {
                label: "Care",
                value: "Wipe with a clean, dry cloth"
            }
        ],
        offer: "Buy 2 pairs and get an extra 10% off"
    },
    {
        id: "puma-backpack",
        name: "Classic Everyday Backpack 23L",
        brand: "Puma",
        category: "Fashion",
        price: 1799,
        mrp: 2999,
        rating: 4.2,
        reviews: 640,
        popularity: 78,
        createdAt: "2026-04-19",
        image: image("photo-1553062407-98eeb64c6a62"),
        images: [
            image("photo-1553062407-98eeb64c6a62"),
            image("photo-1622560480654-d96214fdc887")
        ],
        description: "Keep your daily essentials organized in a durable, versatile backpack with a roomy main compartment and comfortable straps.",
        specifications: [
            {
                label: "Capacity",
                value: "23 litres"
            },
            {
                label: "Material",
                value: "Polyester"
            },
            {
                label: "Compartments",
                value: "2"
            },
            {
                label: "Warranty",
                value: "1 year"
            }
        ],
        offer: "Extra 5% off with SuperCoins"
    },
    {
        id: "milan-sofa",
        name: "Milan 3-Seater Fabric Sofa (Slate Grey)",
        brand: "Urban Ladder",
        category: "Home & Furniture",
        price: 32999,
        mrp: 49999,
        rating: 4.4,
        reviews: 318,
        popularity: 83,
        createdAt: "2026-05-22",
        image: image("photo-1555041469-a586c61ea9bc"),
        images: [
            image("photo-1555041469-a586c61ea9bc"),
            image("photo-1550254478-ead40cc54513")
        ],
        description: "Designed for laid-back evenings and thoughtful living, this three-seater pairs a supportive silhouette with a soft, easy-care fabric.",
        specifications: [
            {
                label: "Seating capacity",
                value: "3"
            },
            {
                label: "Upholstery",
                value: "Polyester fabric"
            },
            {
                label: "Frame",
                value: "Solid wood"
            },
            {
                label: "Assembly",
                value: "Expert assembly included"
            }
        ],
        offer: "Free delivery and installation"
    },
    {
        id: "philips-coffee",
        name: "Brew & Go 1.5L Drip Coffee Maker",
        brand: "Philips",
        category: "Appliances",
        price: 2899,
        mrp: 3999,
        rating: 4.3,
        reviews: 927,
        popularity: 81,
        createdAt: "2026-07-30",
        image: image("photo-1495474472287-4d71bcdd2085"),
        images: [
            image("photo-1495474472287-4d71bcdd2085"),
            image("photo-1517668808822-9ebb02f2a0e6")
        ],
        description: "Wake up to freshly brewed coffee. The generous carafe, aroma swirl and easy-to-clean design make your morning routine simple.",
        specifications: [
            {
                label: "Capacity",
                value: "1.5 litres"
            },
            {
                label: "Power",
                value: "1000 W"
            },
            {
                label: "Features",
                value: "Drip-stop, keep warm"
            },
            {
                label: "Warranty",
                value: "2 years"
            }
        ],
        offer: "Save ₹300 with prepaid orders"
    },
    {
        id: "ordinary-skincare",
        name: "Daily Hydration Skincare Essentials Set",
        brand: "The Ordinary",
        category: "Beauty",
        price: 1499,
        mrp: 1999,
        rating: 4.5,
        reviews: 536,
        popularity: 76,
        createdAt: "2026-08-12",
        image: image("photo-1608248543803-ba4f8c70ae0b"),
        images: [
            image("photo-1608248543803-ba4f8c70ae0b"),
            image("photo-1556229010-6c3f2c9ca5f8")
        ],
        description: "A simple, thoughtful routine for soft, hydrated skin. This set includes everyday essentials formulated for gentle daily use.",
        specifications: [
            {
                label: "Skin type",
                value: "All skin types"
            },
            {
                label: "Set includes",
                value: "3 daily essentials"
            },
            {
                label: "Usage",
                value: "AM and PM routine"
            },
            {
                label: "Cruelty free",
                value: "Yes"
            }
        ],
        offer: "Buy 2 beauty products, get 10% off"
    },
    {
        id: "philips-airfryer",
        name: "Digital Air Fryer, 4.2L (Black)",
        brand: "Philips",
        category: "Appliances",
        price: 7999,
        mrp: 11995,
        rating: 4.5,
        reviews: 1523,
        popularity: 93,
        createdAt: "2026-06-04",
        image: image("photo-1585515320310-259814833e62"),
        images: [
            image("photo-1585515320310-259814833e62"),
            image("photo-1556911220-bff31c812dba")
        ],
        description: "Enjoy your favourite crispy meals with little to no added oil. Smart presets and easy-clean parts make it a kitchen favourite.",
        specifications: [
            {
                label: "Capacity",
                value: "4.2 litres"
            },
            {
                label: "Power",
                value: "1400 W"
            },
            {
                label: "Presets",
                value: "7 cooking presets"
            },
            {
                label: "Warranty",
                value: "2 years"
            }
        ],
        offer: "No cost EMI available"
    },
    {
        id: "bose-speaker",
        name: "SoundLink Flex Portable Bluetooth Speaker",
        brand: "Bose",
        category: "Electronics",
        price: 12900,
        mrp: 15900,
        rating: 4.6,
        reviews: 422,
        popularity: 85,
        createdAt: "2026-09-02",
        image: image("photo-1608043152269-423dbba4e7e1"),
        images: [
            image("photo-1608043152269-423dbba4e7e1"),
            image("photo-1608156639585-b3a032ef9689")
        ],
        description: "Take your soundtrack anywhere with rich, clear audio, a rugged waterproof design and up to 12 hours of battery life.",
        specifications: [
            {
                label: "Battery life",
                value: "Up to 12 hours"
            },
            {
                label: "Connectivity",
                value: "Bluetooth 5.3"
            },
            {
                label: "Water resistance",
                value: "IP67"
            },
            {
                label: "Microphone",
                value: "Built-in"
            }
        ],
        offer: "Free delivery"
    },
    {
        id: "canon-eos",
        name: "EOS R50 Mirrorless Camera with RF-S18-45mm",
        brand: "Canon",
        category: "Electronics",
        price: 68990,
        mrp: 75995,
        rating: 4.7,
        reviews: 295,
        popularity: 88,
        createdAt: "2026-07-01",
        image: image("photo-1516035069371-29a1b244cc32"),
        images: [
            image("photo-1516035069371-29a1b244cc32"),
            image("photo-1502920917128-1aa500764cbd")
        ],
        description: "Create stunning photos and 4K videos with an intuitive mirrorless camera designed for creators ready to take the next step.",
        specifications: [
            {
                label: "Sensor",
                value: "24.2 MP APS-C CMOS"
            },
            {
                label: "Video",
                value: "4K 30p"
            },
            {
                label: "Autofocus",
                value: "Dual Pixel CMOS AF II"
            },
            {
                label: "Lens",
                value: "RF-S18-45mm IS STM"
            }
        ],
        offer: "Get a free 64 GB memory card"
    },
    {
        id: "boldfit-yoga",
        name: "Premium Textured Yoga Mat (6 mm)",
        brand: "Boldfit",
        category: "Sports & Fitness",
        price: 899,
        mrp: 1799,
        rating: 4.1,
        reviews: 2240,
        popularity: 80,
        createdAt: "2026-02-14",
        image: image("photo-1592432678016-e910b452f9a2"),
        images: [
            image("photo-1592432678016-e910b452f9a2"),
            image("photo-1518611012118-696072aa579a")
        ],
        description: "Find your balance on a supportive, non-slip mat with comfortable cushioning for yoga, stretching and everyday home workouts.",
        specifications: [
            {
                label: "Thickness",
                value: "6 mm"
            },
            {
                label: "Material",
                value: "TPE"
            },
            {
                label: "Length",
                value: "183 cm"
            },
            {
                label: "Included",
                value: "Carry strap"
            }
        ],
        offer: "Extra 10% off today"
    },
    {
        id: "lego-blocks",
        name: "Creative Building Blocks Set, 500 Pieces",
        brand: "LEGO",
        category: "Toys & Baby Products",
        price: 2499,
        mrp: 3299,
        rating: 4.8,
        reviews: 764,
        popularity: 87,
        createdAt: "2026-03-19",
        image: image("photo-1558060370-d644479cb6f7"),
        images: [
            image("photo-1558060370-d644479cb6f7"),
            image("photo-1587654780291-39c9404d746b")
        ],
        description: "Give little builders a world of possibilities with a colourful collection of pieces for imaginative, open-ended play.",
        specifications: [
            {
                label: "Pieces",
                value: "500"
            },
            {
                label: "Recommended age",
                value: "5 years and up"
            },
            {
                label: "Material",
                value: "Non-toxic ABS plastic"
            },
            {
                label: "Includes",
                value: "Idea booklet"
            }
        ],
        offer: "Great value gift pick"
    },
    {
        id: "slow-living-book",
        name: "The Art of Slow Living — Hardcover",
        brand: "Penguin Random House",
        category: "Books",
        price: 449,
        mrp: 699,
        rating: 4.4,
        reviews: 319,
        popularity: 72,
        createdAt: "2026-01-08",
        image: image("photo-1544947950-fa07a98d237f"),
        images: [
            image("photo-1544947950-fa07a98d237f"),
            image("photo-1512820790803-83ca734da794")
        ],
        description: "A beautifully illustrated invitation to rediscover the joy in everyday rituals, find room to breathe and make a little more time for what matters.",
        specifications: [
            {
                label: "Format",
                value: "Hardcover"
            },
            {
                label: "Pages",
                value: "256"
            },
            {
                label: "Language",
                value: "English"
            },
            {
                label: "Publisher",
                value: "Penguin Random House"
            }
        ],
        offer: "Buy 2 books, get 5% off"
    },
    {
        id: "levis-tee",
        name: "Men's Classic Crew Neck Cotton T-shirt",
        brand: "Levi's",
        category: "Fashion",
        price: 799,
        mrp: 1299,
        rating: 4.2,
        reviews: 1780,
        popularity: 84,
        createdAt: "2026-05-06",
        image: image("photo-1521572163474-6864f9cf17ab"),
        images: [
            image("photo-1521572163474-6864f9cf17ab"),
            image("photo-1503342217505-b0a15ec3261c")
        ],
        description: "A wardrobe essential made from soft, breathable cotton with an easy everyday fit that works on its own or layered.",
        specifications: [
            {
                label: "Fit",
                value: "Regular"
            },
            {
                label: "Fabric",
                value: "100% cotton"
            },
            {
                label: "Sleeve",
                value: "Short sleeve"
            },
            {
                label: "Care",
                value: "Machine wash"
            }
        ],
        offer: "Buy 2, get 10% off"
    },
    {
        id: "logitech-mouse",
        name: "MX Master 3S Wireless Performance Mouse",
        brand: "Logitech",
        category: "Electronics",
        price: 8995,
        mrp: 11995,
        rating: 4.6,
        reviews: 608,
        popularity: 92,
        createdAt: "2026-04-28",
        image: image("photo-1527814050087-3793815479db"),
        images: [
            image("photo-1527814050087-3793815479db"),
            image("photo-1615663245857-ac93bb7c39e7")
        ],
        description: "Work across devices with precision, quiet clicks and comfortable sculpted support, engineered for long, focused days.",
        specifications: [
            {
                label: "Connectivity",
                value: "Bluetooth / USB receiver"
            },
            {
                label: "DPI",
                value: "Up to 8,000"
            },
            {
                label: "Battery",
                value: "Up to 70 days"
            },
            {
                label: "Compatibility",
                value: "Windows, macOS, Linux"
            }
        ],
        offer: "Extra ₹500 off with select cards"
    },
    {
        id: "ikea-lamp",
        name: "Minimalist LED Study Desk Lamp",
        brand: "IKEA",
        category: "Home & Furniture",
        price: 1299,
        mrp: 1999,
        rating: 4.3,
        reviews: 486,
        popularity: 69,
        createdAt: "2026-03-03",
        image: image("photo-1507473885765-e6ed057f782c"),
        images: [
            image("photo-1507473885765-e6ed057f782c"),
            image("photo-1507473885765-15eec2f40e7b")
        ],
        description: "A clean-lined, adjustable LED desk lamp that brings focused light to late-night reading and everyday work.",
        specifications: [
            {
                label: "Light source",
                value: "Integrated LED"
            },
            {
                label: "Brightness",
                value: "3 dimming levels"
            },
            {
                label: "Power",
                value: "USB powered"
            },
            {
                label: "Material",
                value: "Aluminium and ABS"
            }
        ],
        offer: "Free delivery on orders above ₹499"
    },
    {
        id: "organic-pantry-box",
        name: "Organic Pantry Starter Box",
        brand: "Phalada",
        category: "Grocery",
        price: 849,
        mrp: 1099,
        rating: 4.5,
        reviews: 284,
        popularity: 74,
        createdAt: "2026-10-12",
        image: image("photo-1542838132-92c53300491e"),
        images: [
            image("photo-1542838132-92c53300491e"),
            image("photo-1547592180-85f173990554")
        ],
        description: "Stock your pantry with everyday organic essentials, thoughtfully sourced and packed fresh for easy weeknight cooking.",
        specifications: [
            {
                label: "Includes",
                value: "5 pantry staples"
            },
            {
                label: "Dietary",
                value: "Vegetarian"
            },
            {
                label: "Certifications",
                value: "India Organic"
            },
            {
                label: "Shelf life",
                value: "6 months"
            }
        ],
        offer: "Free delivery on your first grocery order"
    }
];
const categories = [
    {
        name: "Mobiles",
        icon: "Smartphone",
        image: image("photo-1511707171634-5f897ff02aa9", 500)
    },
    {
        name: "Electronics",
        icon: "Laptop",
        image: image("photo-1496181133206-80ce9b88a853", 500)
    },
    {
        name: "Fashion",
        icon: "Shirt",
        image: image("photo-1521572163474-6864f9cf17ab", 500)
    },
    {
        name: "Home & Furniture",
        icon: "Sofa",
        image: image("photo-1555041469-a586c61ea9bc", 500)
    },
    {
        name: "Appliances",
        icon: "Refrigerator",
        image: image("photo-1585515320310-259814833e62", 500)
    },
    {
        name: "Beauty",
        icon: "Sparkles",
        image: image("photo-1608248543803-ba4f8c70ae0b", 500)
    },
    {
        name: "Grocery",
        icon: "ShoppingBasket",
        image: image("photo-1542838132-92c53300491e", 500)
    },
    {
        name: "Toys & Baby Products",
        icon: "Baby",
        image: image("photo-1558060370-d644479cb6f7", 500)
    },
    {
        name: "Sports & Fitness",
        icon: "Dumbbell",
        image: image("photo-1592432678016-e910b452f9a2", 500)
    },
    {
        name: "Books",
        icon: "BookOpen",
        image: image("photo-1544947950-fa07a98d237f", 500)
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0j404bf-zr3i9._.js.map