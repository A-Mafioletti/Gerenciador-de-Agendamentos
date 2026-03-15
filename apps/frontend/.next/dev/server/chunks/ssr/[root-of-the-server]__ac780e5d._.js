module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackofficeLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function BackofficeLayout({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const links = [
        {
            href: "/dashboard",
            icon: "calendar_month",
            label: "Agenda"
        },
        {
            href: "/clientes",
            icon: "group",
            label: "Clientes"
        },
        {
            href: "/configuracoes",
            icon: "settings",
            label: "Ajustes"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "hidden md:flex flex-col w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shrink-0 sticky top-0 h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-bold tracking-tight text-primary",
                            children: "Agendamentos"
                        }, void 0, false, {
                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 px-4 py-4 space-y-2",
                        children: links.map((link)=>{
                            const isActive = pathname === link.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? "bg-primary text-white font-medium shadow-md shadow-primary/20" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        style: {
                                            fontVariationSettings: isActive ? "'FILL' 1" : undefined
                                        },
                                        children: link.icon
                                    }, void 0, false, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, link.href, true, {
                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-slate-200 dark:border-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 px-2 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "size-10 rounded-full bg-primary/10 overflow-hidden border border-primary/20 shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTjL8evO208DzmWZwY_gGCcq2GM5LhO2ijZndyRkUbFG75MSoDJjW5i1A-uH6XcqbSXvhhAdvmyQB_Ada6LxaVqempgjZEJgl_uWv1ifI3hRY86RhJ7Ikcszve4PxvonGWv2UASq1szRikspY5rRNNL8RoSMG_yM0vuIIwq2rc-GxHL5_iWn28C-8SZu6ZiAC5mR8ekDPAXab7ZDGuXkhTqV04cze0qWzQv2YnKaC9VSN-gOCnZip4H35IMGjgFpY6xmRUcUhcQPE",
                                        alt: "User",
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                                        lineNumber: 51,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                                    lineNumber: 50,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold truncate",
                                            children: "Carlos Eletricista"
                                        }, void 0, false, {
                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                                            lineNumber: 54,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 truncate",
                                            children: "Profissional"
                                        }, void 0, false, {
                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                                            lineNumber: 55,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                                    lineNumber: 53,
                                    columnNumber: 14
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col min-w-0",
                children: children
            }, void 0, false, {
                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 pb-6 pt-3 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl mx-auto flex items-center justify-between",
                    children: links.map((link)=>{
                        const isActive = pathname === link.href;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-primary'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined",
                                    style: {
                                        fontVariationSettings: isActive ? "'FILL' 1" : undefined
                                    },
                                    children: link.icon
                                }, void 0, false, {
                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                                    lineNumber: 79,
                                    columnNumber: 18
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-bold uppercase tracking-wider",
                                    children: link.label
                                }, void 0, false, {
                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                                    lineNumber: 80,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, link.href, true, {
                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                            lineNumber: 72,
                            columnNumber: 16
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/(backoffice)/layout.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ac780e5d._.js.map