(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Home() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedTime, setSelectedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("08:00");
    const [days, setDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [monthYear, setMonthYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        whatsapp: "",
        service: "Manutenção Preventiva",
        details: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const today = new Date();
            const dayNames = [
                "Dom",
                "Seg",
                "Ter",
                "Qua",
                "Qui",
                "Sex",
                "Sáb"
            ];
            const monthNames = [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
            ];
            setMonthYear(`${monthNames[today.getMonth()]} ${today.getFullYear()}`);
            const generatedDays = [];
            for(let i = 0; i < 15; i++){
                const d = new Date(today);
                d.setDate(today.getDate() + i);
                generatedDays.push({
                    label: dayNames[d.getDay()],
                    day: d.getDate().toString().padStart(2, '0')
                });
            }
            setDays(generatedDays);
            setSelectedDate(generatedDays[0].day);
        }
    }["Home.useEffect"], []);
    const times = [
        "08:00",
        "09:30",
        "10:30",
        "13:00",
        "14:30",
        "16:00"
    ];
    const formatWhatsApp = (value)=>{
        // Remove all non-digits and limit to 11 characters
        const digits = value.replace(/\D/g, '').slice(0, 11);
        let formatted = digits;
        if (digits.length > 2) {
            formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
        }
        if (digits.length > 7) {
            formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
        }
        return formatted;
    };
    const handleWhatsAppChange = (e)=>{
        setFormData({
            ...formData,
            whatsapp: formatWhatsApp(e.target.value)
        });
    };
    const handleBooking = ()=>{
        if (!formData.name.trim()) {
            alert("Por favor, preencha o seu nome.");
            return;
        }
        const phoneDigits = formData.whatsapp.replace(/\D/g, '');
        if (phoneDigits.length !== 11) {
            alert("Por favor, preencha um número de WhatsApp válido com DDD (11 dígitos).");
            return;
        }
        console.log("Booking Confirmed!", {
            selectedDate,
            selectedTime,
            ...formData
        });
        const query = new URLSearchParams({
            data: selectedDate,
            hora: selectedTime,
            servico: formData.service
        }).toString();
        router.push(`/sucesso?${query}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md lg:max-w-5xl mx-auto flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-slate-900 dark:text-slate-100 p-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined",
                                children: "arrow_back"
                            }, void 0, false, {
                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "flex-1 text-center font-semibold text-lg",
                            children: "Agendamento"
                        }, void 0, false, {
                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8"
                        }, void 0, false, {
                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-md lg:max-w-5xl mx-auto pb-32 lg:pb-12 pt-0 lg:pt-8 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                    className: "flex flex-col items-center lg:items-start pt-8 lg:pt-0 pb-6 px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden mb-4 bg-primary/10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                alt: "Carlos Eletricista",
                                                className: "w-full h-full object-cover",
                                                "data-alt": "Professional portrait of an electrician smiling",
                                                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTjL8evO208DzmWZwY_gGCcq2GM5LhO2ijZndyRkUbFG75MSoDJjW5i1A-uH6XcqbSXvhhAdvmyQB_Ada6LxaVqempgjZEJgl_uWv1ifI3hRY86RhJ7Ikcszve4PxvonGWv2UASq1szRikspY5rRNNL8RoSMG_yM0vuIIwq2rc-GxHL5_iWn28C-8SZu6ZiAC5mR8ekDPAXab7ZDGuXkhTqV04cze0qWzQv2YnKaC9VSN-gOCnZip4H35IMGjgFpY6xmRUcUhcQPE"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl lg:text-3xl font-bold tracking-tight",
                                            children: "Carlos Eletricista"
                                        }, void 0, false, {
                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 dark:text-slate-400 text-sm lg:text-base text-center lg:text-left mt-2 lg:mt-3",
                                            children: "Especialista em Instalações Residenciais e Comerciais com mais de 10 anos de experiência."
                                        }, void 0, false, {
                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "mt-4 lg:mt-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-3 px-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-slate-900 dark:text-slate-100 lg:text-lg",
                                                    children: "Selecione o Dia"
                                                }, void 0, false, {
                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs lg:text-sm text-primary font-medium",
                                                    children: monthYear || "Carregando..."
                                                }, void 0, false, {
                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 overflow-x-auto hide-scrollbar pb-2 px-4",
                                            children: days.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedDate(item.day),
                                                    className: `shrink-0 flex flex-col items-center justify-center w-16 h-20 lg:w-20 lg:h-24 rounded-xl transition-all ${selectedDate === item.day ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105" : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/50"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[10px] lg:text-xs uppercase font-bold ${selectedDate === item.day ? 'opacity-80' : 'text-slate-400'}`,
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xl lg:text-2xl font-bold",
                                                            children: item.day
                                                        }, void 0, false, {
                                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, item.day, true, {
                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "mt-8 lg:mt-10 px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-slate-900 dark:text-slate-100 mb-3 lg:mb-4 lg:text-lg",
                                            children: "Horários Disponíveis"
                                        }, void 0, false, {
                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-3",
                                            children: times.map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setSelectedTime(time),
                                                    className: `py-2.5 lg:py-3 rounded-lg border text-sm lg:text-base transition-colors ${selectedTime === time ? "border-primary bg-primary/10 text-primary font-semibold shadow-sm" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-primary/60 hover:bg-slate-50 dark:hover:bg-slate-700/50"}`,
                                                    children: time
                                                }, time, false, {
                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-5 relative mt-10 lg:mt-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:sticky lg:top-24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "px-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:bg-white lg:dark:bg-slate-900 lg:p-8 lg:rounded-3xl lg:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:lg:shadow-[0_8px_30px_rgb(0,0,0,0.2)] lg:border lg:border-slate-200 lg:dark:border-slate-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-slate-900 dark:text-slate-100 mb-4 lg:mb-6 lg:text-xl",
                                                    children: "Informações de Contato"
                                                }, void 0, false, {
                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 lg:space-y-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs lg:text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 lg:mb-2 px-1",
                                                                    children: "Seu Nome"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                    lineNumber: 175,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    className: "w-full px-4 py-3 lg:py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all",
                                                                    placeholder: "Como podemos te chamar?",
                                                                    type: "text",
                                                                    value: formData.name,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            name: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                    lineNumber: 176,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs lg:text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 lg:mb-2 px-1",
                                                                    children: "WhatsApp"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                    lineNumber: 185,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-xl lg:text-2xl",
                                                                            children: "call"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                            lineNumber: 187,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            className: "w-full pl-12 pr-4 py-3 lg:py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all",
                                                                            placeholder: "(00) 00000-0000",
                                                                            type: "tel",
                                                                            value: formData.whatsapp,
                                                                            onChange: handleWhatsAppChange,
                                                                            maxLength: 15
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                            lineNumber: 188,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs lg:text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 lg:mb-2 px-1",
                                                                    children: "Serviço Desejado"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                    lineNumber: 199,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    className: "w-full px-4 py-3 lg:py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none",
                                                                    value: formData.service,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            service: e.target.value
                                                                        }),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Manutenção Preventiva"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                            lineNumber: 205,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Reparo em Disjuntores"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                            lineNumber: 206,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Instalação de Chuveiro"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                            lineNumber: 207,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Iluminação e Leds"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                            lineNumber: 208,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: "Outros"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                            lineNumber: 209,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                    lineNumber: 200,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs lg:text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 lg:mb-2 px-1",
                                                                    children: "Endereço ou Observações"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    className: "w-full px-4 py-3 lg:py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none",
                                                                    placeholder: "Rua, número e detalhes do problema...",
                                                                    rows: 3,
                                                                    value: formData.details,
                                                                    onChange: (e)=>setFormData({
                                                                            ...formData,
                                                                            details: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hidden lg:block mt-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleBooking,
                                                        className: "w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 active:scale-[0.98] transition-transform hover:bg-primary/90 hover:shadow-primary/40",
                                                        children: "Confirmar Agendamento"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                        className: "lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 z-40",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-md mx-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleBooking,
                                                className: "w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 active:scale-[0.98] transition-transform hover:bg-primary/90",
                                                children: "Confirmar Agendamento"
                                            }, void 0, false, {
                                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pucminas/Projeto Integrado/Projeto-agendamentos/apps/frontend/src/app/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "MWJGTVMpGzlahy90ZgCQHODbv/o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$pucminas$2f$Projeto__Integrado$2f$Projeto$2d$agendamentos$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/pucminas/Projeto Integrado/Projeto-agendamentos/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=pucminas_Projeto%20Integrado_Projeto-agendamentos_b38f080d._.js.map