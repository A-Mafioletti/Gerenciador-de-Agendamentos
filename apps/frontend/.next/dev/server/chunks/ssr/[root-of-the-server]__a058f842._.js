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
"[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfiguracoesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ConfiguracoesPage() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Minimal placeholder state
    const [dias, setDias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        seg: true,
        ter: true,
        qua: true,
        qui: true,
        sex: true,
        sab: false,
        dom: false
    });
    const toggleDia = (dia)=>{
        setDias((prev)=>({
                ...prev,
                [dia]: !prev[dia]
            }));
    };
    const handleSave = ()=>{
        alert("Configurações salvas com sucesso! (Simulação)");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            className: "flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-slate-700 dark:text-slate-300",
                                children: "arrow_back"
                            }, void 0, false, {
                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-bold tracking-tight",
                            children: "Configurações e Disponibilidade"
                        }, void 0, false, {
                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 w-full max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto overflow-y-auto pb-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-semibold uppercase tracking-wider text-primary mb-4",
                                children: "Seção A: Dias de Trabalho"
                            }, void 0, false, {
                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base font-medium",
                                                children: "Segunda-feira"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                checked: dias.seg,
                                                onChange: ()=>toggleDia('seg'),
                                                className: "h-6 w-6 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary accent-primary",
                                                type: "checkbox"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 42,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base font-medium",
                                                children: "Terça-feira"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                checked: dias.ter,
                                                onChange: ()=>toggleDia('ter'),
                                                className: "h-6 w-6 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary accent-primary",
                                                type: "checkbox"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 46,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base font-medium",
                                                children: "Quarta-feira"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                checked: dias.qua,
                                                onChange: ()=>toggleDia('qua'),
                                                className: "h-6 w-6 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary accent-primary",
                                                type: "checkbox"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base font-medium",
                                                children: "Quinta-feira"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                checked: dias.qui,
                                                onChange: ()=>toggleDia('qui'),
                                                className: "h-6 w-6 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary accent-primary",
                                                type: "checkbox"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-base font-medium",
                                                children: "Sexta-feira"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                checked: dias.sex,
                                                onChange: ()=>toggleDia('sex'),
                                                className: "h-6 w-6 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary accent-primary",
                                                type: "checkbox"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-base font-medium ${!dias.sab && 'text-slate-400'}`,
                                                children: "Sábado"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                checked: dias.sab,
                                                onChange: ()=>toggleDia('sab'),
                                                className: "h-6 w-6 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary accent-primary",
                                                type: "checkbox"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-between py-3 px-2 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-base font-medium ${!dias.dom && 'text-slate-400'}`,
                                                children: "Domingo"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                checked: dias.dom,
                                                onChange: ()=>toggleDia('dom'),
                                                className: "h-6 w-6 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary accent-primary",
                                                type: "checkbox"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-semibold uppercase tracking-wider text-primary mb-4",
                                children: "Seção B: Horários"
                            }, void 0, false, {
                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-slate-500",
                                                children: "Início do Expediente"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary p-3 outline-none",
                                                    type: "time",
                                                    defaultValue: "08:00"
                                                }, void 0, false, {
                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-slate-500",
                                                children: "Término do Expediente"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary p-3 outline-none",
                                                    type: "time",
                                                    defaultValue: "18:00"
                                                }, void 0, false, {
                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-slate-500",
                                                children: "Início da Pausa"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary p-3 outline-none",
                                                    type: "time",
                                                    defaultValue: "12:00"
                                                }, void 0, false, {
                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-slate-500",
                                                children: "Fim da Pausa"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-primary p-3 outline-none",
                                                    type: "time",
                                                    defaultValue: "13:00"
                                                }, void 0, false, {
                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "p-4 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-semibold uppercase tracking-wider text-primary",
                                        children: "Seção C: Serviços"
                                    }, void 0, false, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>alert("Em desenvolvimento"),
                                        className: "flex items-center gap-1 text-sm font-bold text-primary hover:underline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[18px]",
                                                children: "add_circle"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this),
                                            "Adicionar Novo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-slate-900 dark:text-white",
                                                        children: "Manutenção Preventiva"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 text-slate-500 text-sm mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-[16px]",
                                                                children: "schedule"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 19
                                                            }, this),
                                                            "1h 00 min"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-2 text-slate-400 hover:text-red-500 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    children: "delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-slate-900 dark:text-white",
                                                        children: "Instalação de Chuveiro"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 text-slate-500 text-sm mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-[16px]",
                                                                children: "schedule"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 19
                                                            }, this),
                                                            "1h 30 min"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-2 text-slate-400 hover:text-red-500 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    children: "delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-slate-900 dark:text-white",
                                                        children: "Reparo de Fiação"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 text-slate-500 text-sm mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-[16px]",
                                                                children: "schedule"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 19
                                                            }, this),
                                                            "2h 00 min"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-2 text-slate-400 hover:text-red-500 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined",
                                                    children: "delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10"
                    }, void 0, false, {
                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 w-full z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-t from-background-light via-background-light dark:from-background-dark dark:via-background-dark to-transparent pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto px-4 pb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: "w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all",
                                children: "Salvar Configurações"
                            }, void 0, false, {
                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 pb-6 pt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-xl mx-auto flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard",
                                        className: `flex flex-col items-center gap-1 ${pathname === '/dashboard' ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-primary'} transition-colors`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontVariationSettings: pathname === '/dashboard' ? "'FILL' 1" : undefined
                                                },
                                                children: "calendar_month"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold uppercase tracking-wider",
                                                children: "Agenda"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/clientes",
                                        className: `flex flex-col items-center gap-1 ${pathname === '/clientes' ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-primary'} transition-colors`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontVariationSettings: pathname === '/clientes' ? "'FILL' 1" : undefined
                                                },
                                                children: "group"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold uppercase tracking-wider",
                                                children: "Clientes"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/configuracoes",
                                        className: `flex flex-col items-center gap-1 ${pathname === '/configuracoes' ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-primary'} transition-colors`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined",
                                                style: {
                                                    fontVariationSettings: pathname === '/configuracoes' ? "'FILL' 1" : undefined
                                                },
                                                children: "settings"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold uppercase tracking-wider",
                                                children: "Ajustes"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/configuracoes/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a058f842._.js.map