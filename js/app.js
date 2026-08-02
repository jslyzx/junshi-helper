const MockData = {
    user: {
        name: "陈美琳",
        role: "项目专员",
        project: "拓益（特瑞普利单抗）院内患者关爱项目",
        hospital: "上海市胸科医院",
        dept: "肿瘤科",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mimi"
    },
    stats: {
        totalPatients: 84,
        monthlyEnrolled: 12,
        pendingFollowup: 5
    },
    // V0.4 九类随访任务体系
    taskTypes: [
        { key: 'auth',     label: '项目说明与授权',       icon: '📄', color: '#0052D9', bg: '#E8F3FF' },
        { key: 'profile',  label: '首触达建档',           icon: '📋', color: '#2BA471', bg: '#EAF7F1' },
        { key: 'cycle',    label: '周期治疗/复诊随访',     icon: '📅', color: '#00A0A8', bg: '#E6FAFB' },
        { key: 'recall',   label: '超期未治疗/未复诊召回', icon: '⏰', color: '#E37318', bg: '#FFF2E6' },
        { key: 'withdraw', label: '退出/拒访管理',         icon: '🚪', color: '#86909C', bg: '#F2F3F5' },
        { key: 'ae',       label: '异常症状/AE即时随访',   icon: '🚨', color: '#D54941', bg: '#FDEEEE' },
        { key: 'special',  label: '特殊情形/质量投诉处理', icon: '⚠️', color: '#7367F0', bg: '#F0EEFF' },
        { key: 'pv',       label: 'PV/事件补充随访',       icon: '🔍', color: '#4E44BD', bg: '#EAE9FB' },
        { key: 'patient',  label: '患者任务-复诊记录',     icon: '📱', color: '#0097A7', bg: '#E0F7FA' }
    ],
    tasks: [
        { id: 't01', type: 'cycle', patient: '沈*浩', gender: '男', age: 52, disease: '非小细胞肺癌', cycle: 'C3', planDate: '今天', status: 'pending', priority: 'high',
          desc: '第3周期治疗前随访：确认复查、依从性与安全性状态', dept: '胸部肿瘤内科' },
        { id: 't02', type: 'profile', patient: '林*国', gender: '男', age: 58, disease: '食管癌', cycle: 'C1', planDate: '今天', status: 'pending', priority: 'high',
          desc: '患者已于患者端完成授权，需现场完成首触达建档', dept: '肿瘤科' },
        { id: 't03', type: 'ae', patient: '曹*云', gender: '女', age: 48, disease: '非小细胞肺癌', cycle: 'C2', planDate: '紧急', status: 'pending', priority: 'high',
          source: '患者上报', sourceTime: '今天 08:42',
          report: '昨晚开始身上起红疹，痒得睡不着觉，腿上和背上都有，还有些发烫。患者在患者端提交了不适上报。',
          desc: '患者上报皮疹/瘙痒，需即时随访并做AE分级追问', dept: '胸部肿瘤内科' },
        { id: 't04', type: 'cycle', patient: '张*英', gender: '女', age: 61, disease: '鼻咽癌', cycle: 'C4', planDate: '明天', status: 'pending', priority: 'med',
          desc: '复诊前常规随访：复查周期确认与安全性总筛', dept: '放疗科' },
        { id: 't05', type: 'recall', patient: '刘*财', gender: '男', age: 66, disease: '尿路上皮癌', cycle: 'C5', planDate: '已超期 3 天', status: 'overdue', priority: 'high',
          desc: '计划复诊日期已过，两次电话未接通，需召回并明确超期原因', dept: '泌尿外科' },
        { id: 't06', type: 'withdraw', patient: '王*华', gender: '男', age: 70, disease: '肝细胞癌', cycle: 'C6', planDate: '今天', status: 'pending', priority: 'med',
          desc: '患者电话中表示不愿再接受随访，需按流程完成退出/拒访管理', dept: '肝胆外科' },
        { id: 't07', type: 'pv', patient: '陈*生', gender: '男', age: 65, disease: '黑色素瘤', cycle: 'C7', planDate: '明天', status: 'pending', priority: 'med',
          eventNo: 'EV-2026-0312',
          desc: 'PV要求补充：腹泻事件结局与就医情况，关联原事件编号 EV-2026-0312', dept: '肿瘤科' },
        { id: 't08', type: 'special', patient: '李*强', gender: '男', age: 55, disease: '非小细胞肺癌', cycle: 'C3', planDate: '今天', status: 'pending', priority: 'high',
          desc: '患者投诉输液过程中出现异常，需按特殊情形/质量投诉流程分流处理', dept: '胸部肿瘤内科' },
        { id: 't09', type: 'auth', patient: '周*梅', gender: '女', age: 50, disease: '三阴性乳腺癌', cycle: '-', planDate: '今天', status: 'pending', priority: 'low',
          desc: '患者已扫码进入项目首页，待完成项目说明与授权（患者端）', dept: '乳腺外科' },
        { id: 't10', type: 'patient', patient: '赵*芳', gender: '女', age: 57, disease: '食管癌', cycle: 'C2', planDate: '今天', status: 'pending', priority: 'med',
          desc: '计划复诊日期次日已生成复诊记录任务，患者端待提交', dept: '肿瘤科' },
        { id: 't11', type: 'cycle', patient: '吴*兰', gender: '女', age: 63, disease: '非小细胞肺癌', cycle: 'C5', planDate: '后天', status: 'pending', priority: 'low',
          desc: '第5周期治疗前随访', dept: '胸部肿瘤内科' },
        { id: 't12', type: 'ae', patient: '郑*明', gender: '男', age: 59, disease: '肝细胞癌', cycle: 'C3', planDate: '今天', status: 'pending', priority: 'high',
          source: '随访发现', sourceTime: '昨天 16:20',
          report: '昨日周期随访中患者自述近一周咳嗽加重、上楼气短，安全性总筛为阳性，已自动生成AE即时随访任务。',
          desc: '随访发现咳嗽/气短线索，需AE分级追问', dept: '肝胆外科' },
        { id: 't13', type: 'recall', patient: '孙*萍', gender: '女', age: 53, disease: '鼻咽癌', cycle: 'C4', planDate: '已超期 1 天', status: 'overdue', priority: 'med',
          desc: '患者任务超时未提交复诊记录，需召回确认', dept: '放疗科' },
        { id: 't14', type: 'profile', patient: '钱*峰', gender: '男', age: 60, disease: '尿路上皮癌', cycle: 'C1', planDate: '明天', status: 'pending', priority: 'med',
          desc: '授权完成次日，安排院内首触达建档', dept: '泌尿外科' },
        { id: 't15', type: 'cycle', patient: '黄*丽', gender: '女', age: 56, disease: '非小细胞肺癌', cycle: 'C2', planDate: '昨天', status: 'done', priority: 'low',
          desc: '第2周期治疗前随访（已完成）', dept: '胸部肿瘤内科' },
        { id: 't16', type: 'auth', patient: '徐*斌', gender: '男', age: 64, disease: '食管癌', cycle: '-', planDate: '昨天', status: 'done', priority: 'low',
          desc: '项目说明与授权（患者已同意，已生成首触达建档任务）', dept: '肿瘤科' }
    ],
    messages: [
        { id: 100, type: "bind", unread: true, title: "新患者绑定通知", desc: "患者【林*国】已扫码绑定，请关注其资料提交进度，如有需要可协助上传。", time: "5 分钟前", icon: "👤", color: "bg-green" },
        { id: 101, type: "announcement", unread: true, title: "项目补丁说明 V2.4", desc: "请各位专员务必于本周五前完成 D10 随访数据的二次质控核对。", time: "10 分钟前", icon: "📢", color: "bg-blue" },
        { id: 105, type: "complaint", unread: true, title: "新投诉提醒", desc: "患者【李*强】提交了一项针对您的投诉，请及时查看并跟进处理。", time: "30 分钟前", icon: "📢", color: "bg-rose" },
        { id: 102, type: "alert", unread: true, title: "随访即将逾期预警", desc: "患者【曹*云】的 D1 访视教育任务还有 2 小时截止，请尽快处理。", time: "1 小时前", icon: "⏰", color: "bg-rose" },
        { id: 103, type: "qc", unread: false, title: "数据质控已通过", desc: "您提交的患者【张*华】现场入组申请已通过审核，现已进入随访期。", time: "昨天 14:20", icon: "✅", color: "bg-green" },
        { id: 104, type: "system", unread: false, title: "系统停机维护公告", desc: "系统将于本周日凌晨 02:00-04:00 进行例行维护，届时将无法登录。", time: "2024-04-18", icon: "⚙️", color: "bg-purple" }
    ],
    projectFile: {
        info: {
            fullName: "拓益（特瑞普利单抗）院内患者关爱项目（PSP试点）",
            code: "JS-TY-PSP-001-V0.4",
            sponsor: "君实生物科技责任有限公司",
            stage: "院内试点执行期"
        },
        sop: [
            { category: "入组标准", items: ["本院就诊并使用拓益（特瑞普利单抗）的肿瘤患者", "患者本人或授权家属完成项目授权后纳入管理", "不得以治疗、报销、医生关系作为参与诱导"] },
            { category: "访视周期", timeline: ["授权完成 T+0~T+3 天: 首触达建档", "每周期治疗/复诊前 3~5 天: 周期随访", "计划日期次日: 患者复诊记录任务", "超期未治疗/未复诊: 召回任务"] }
        ],
        contacts: [
            { name: "李老师", role: "项目经理 (PM)", phone: "138-0000-0001" },
            { name: "周经理", role: "PV 接口人", phone: "139-1111-2222" }
        ]
    },
    todoList: [
        { id: 0, type: "材料待上传", patient: "林*国", priority: "med", desc: "患者已绑定，尚未上传入组资料", time: "刚刚" },
        { id: 3, type: "异常回流", patient: "陈*生", priority: "high", desc: "AE 回流：皮疹数据漏填", time: "15:30" },
        { id: 4, type: "失访召回", patient: "张*兰", priority: "low", desc: "失访召回：第二次电话联系", time: "明天" },
        { id: 5, type: "首周期教育", patient: "曹*云", priority: "high", desc: "ADC 药物输注后教育", time: "剩余 2小时" },
        { id: 6, type: "现场补访", patient: "刘*财", priority: "med", desc: "D14 实验室检查检查单核对", time: "已逾期 1天" }
    ],
    // 患者列表数据
    patients: [
        { id: 101, name: "沈传浩", age: 52, status: "随访中", statusTag: "success", phone: "152****4701", enrollDate: "2024-03-15", disease: "NSCLC", cycle: "C3D1" },
        { id: 102, name: "张英杰", age: 45, status: "待入组", statusTag: "warning", phone: "138****3344", enrollDate: "-", disease: "实体瘤", cycle: "-" },
        { id: 103, name: "王丽华", age: 61, status: "已结项", statusTag: "muted", phone: "135****7766", enrollDate: "2024-02-10", disease: "尿路上皮癌", cycle: "Done" },
        { id: 104, name: "曹静云", age: 48, status: "AE 回流", statusTag: "danger", phone: "173****0000", enrollDate: "2024-04-01", disease: "NSCLC", cycle: "C1D1" },
        { id: 105, name: "刘建国", age: 55, status: "现场补访", statusTag: "info", phone: "139****2233", enrollDate: "2023-11-20", disease: "晚期胃癌", cycle: "C8D14" }
    ],
    // 患者全景时间轴
    timeline: [
        { date: '2024-03-01', title: '初诊入库', content: '门诊部初步诊断并转入项目组筛选。', type: 'milestone' },
        { date: '2024-03-05', title: '签署知情同意书', content: '由专员陈美琳协助完成纸质签署并扫码入组。', type: 'check' },
        { date: '2024-03-15', title: '正式入组', content: '符合入排标准，触发首次给药教育。', type: 'success' },
        { date: '2024-04-10', title: '给药周期 1', content: '完成首轮 ADC 药物输注，进行出院前教育。', type: 'info' },
        { id: 3, date: '2024-04-18', title: '发生 AE (皮疹)', content: '患者自述局部瘙痒，专员已提交异常回流处理。', type: 'danger' }
    ],
    // 补充材料
    supplements: [
        { id: 1, patientId: 101, date: '2024-04-20', title: '补充材料: 门诊病历', content: '专员协助上传的门诊复查记录。', photos: ['https://im.gurl.eu.org/file/AgACAgEAAxkDAAEBizRqFCu7ZUZD4JkAATyZY8lKTL5Bf4sAAvQLaxvLS6BEmFWCM8s1_y0BAAMCAAN3AAM7BA.png'], type: 'info' }
    ],
    // 投诉记录
    complaints: [
        { id: 1, time: '2024-04-30 14:10', patient: '李*强', target: '项目专员', content: '回复消息比较慢，希望可以改进。', status: '处理中' },
        { id: 2, time: '2024-04-25 09:30', patient: '王*平', target: '项目专员', content: '服务态度可以再热情一点。', status: '已关闭' }
    ]
};

const App = {
    init: function() {
        console.log("Helper Portal Initialized");
    },

    navigateTo: function(url) {
        window.location.href = url;
    },

    getUser: function() {
        return MockData.user;
    },

    getStats: function() {
        return MockData.stats;
    },

    getMessages: function() {
        return MockData.messages;
    },

    getComplaints: function() {
        return MockData.complaints;
    },

    getUnreadCount: function() {
        return MockData.messages.filter(m => m.unread).length;
    },

    getProjectData: function() {
        return MockData.projectFile;
    },

    getTodos: function() {
        return MockData.todoList;
    },

    // ===== V0.4 九类任务体系 =====
    getTaskTypes: function() {
        return MockData.taskTypes;
    },

    getTaskType: function(key) {
        return MockData.taskTypes.find(t => t.key === key);
    },

    getTasks: function() {
        const doneIds = this.getDoneTaskIds();
        return MockData.tasks.map(t => doneIds.includes(t.id) ? Object.assign({}, t, { status: 'done' }) : t);
    },

    getTaskById: function(id) {
        return this.getTasks().find(t => t.id === id);
    },

    getTaskStats: function() {
        const tasks = this.getTasks();
        const pending = tasks.filter(t => t.status !== 'done');
        return {
            total: tasks.length,
            pending: pending.length,
            overdue: pending.filter(t => t.status === 'overdue').length,
            ae: pending.filter(t => t.type === 'ae').length,
            today: pending.filter(t => t.planDate === '今天' || t.planDate === '紧急').length,
            byType: MockData.taskTypes.map(tt => ({
                key: tt.key,
                count: pending.filter(t => t.type === tt.key).length
            }))
        };
    },

    getDoneTaskIds: function() {
        const data = localStorage.getItem('helper_done_tasks');
        return data ? JSON.parse(data) : [];
    },

    completeTask: function(id) {
        const ids = this.getDoneTaskIds();
        if (!ids.includes(id)) {
            ids.push(id);
            localStorage.setItem('helper_done_tasks', JSON.stringify(ids));
        }
    },

    // ===== 随访记录（本地 mock 存储）=====
    getFollowupRecords: function() {
        const data = localStorage.getItem('helper_followup_records');
        return data ? JSON.parse(data) : [];
    },

    saveFollowupRecord: function(record) {
        const records = this.getFollowupRecords();
        record.id = 'FR-' + Date.now();
        record.submitTime = new Date().toLocaleString('zh-CN', { hour12: false });
        records.unshift(record);
        localStorage.setItem('helper_followup_records', JSON.stringify(records));
        if (record.taskId) this.completeTask(record.taskId);
        return record;
    },

    logout: function() {
        alert("已退出登录");
        // window.location.href = 'login.html';
    },

    // 专员端收藏
    getHelperFavorites: function() {
        const data = localStorage.getItem('helper_favorites');
        return data ? JSON.parse(data) : [];
    },

    saveHelperFavorites: function(favs) {
        localStorage.setItem('helper_favorites', JSON.stringify(favs));
    },

    toggleHelperFavorite: function(articleId) {
        let favs = this.getHelperFavorites();
        const idx = favs.indexOf(articleId);
        if (idx > -1) {
            favs.splice(idx, 1);
        } else {
            favs.push(articleId);
        }
        this.saveHelperFavorites(favs);
        return idx === -1; // 返回是否为新增收藏
    },

    isHelperFavorited: function(articleId) {
        return this.getHelperFavorites().includes(articleId);
    },

    getHelperArticle: function(id) {
        return MockData.helperEducation.find(a => a.id === id);
    },

    getPatients: function() {
        return MockData.patients;
    },

    getPatientDetail: function(id) {
        return MockData.patients.find(p => p.id == id);
    },

    getTimeline: function(patientId) {
        let baseTimeline = [...MockData.timeline];
        const supplements = this.getSupplements(patientId);
        
        // 将补充材料转换为时间轴格式并合并
        supplements.forEach(s => {
            baseTimeline.push({
                id: 'sup_' + s.id,
                date: s.date,
                title: s.title,
                content: s.content,
                photos: s.photos,
                type: 'info',
                isSupplement: true
            });
        });

        // 按日期排序
        return baseTimeline.sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    getSupplements: function(patientId) {
        const localData = localStorage.getItem('patient_supplements_' + patientId);
        const saved = localData ? JSON.parse(localData) : [];
        const mock = MockData.supplements.filter(s => s.patientId == patientId);
        return [...mock, ...saved];
    },

    saveSupplement: function(patientId, supplement) {
        const localData = localStorage.getItem('patient_supplements_' + patientId);
        const saved = localData ? JSON.parse(localData) : [];
        supplement.id = Date.now();
        saved.push(supplement);
        localStorage.setItem('patient_supplements_' + patientId, JSON.stringify(saved));
        return supplement;
    }
};

// 专员端教育内容数据
MockData.helperEducation = [
    // 岗位职责
    { id: 1, category: '岗位职责', title: '临床项目专员 (Helper) 岗位职责说明书', summary: '明确 Helper 在项目中的核心定位、职责范围及日常工作汇报线。', readCount: 1250, date: '2024-04-25' },
    { id: 2, category: '岗位职责', title: '项目专员月度考核指标 (KPI) 详解', summary: '深度解析入组率、随访及时率及数据准确性等关键考核维度的计算方法。', readCount: 980, date: '2024-04-20' },
    // SOP 培训
    { id: 3, category: 'SOP 培训', title: '现场入组 SOP：从扫码到签字的标准流程', summary: '规范现场入组的每一步操作，确保知情同意书签署的合规性与资料上传的完整性。', readCount: 1560, date: '2024-04-22' },
    { id: 4, category: 'SOP 培训', title: '异常回流处理 SOP：AE 事件的识别与归档', summary: '当系统触发异常回流时，专员应如何协助医生补充临床证据并完成数据上报。', readCount: 1120, date: '2024-04-18' },
    // 疾病基础知识
    { id: 101, category: '疾病基础', title: '非小细胞肺癌概览与分期', summary: '了解非小细胞肺癌的病理分型、TNM 分期标准及治疗策略选择依据。', readCount: 2340, date: '2024-04-10' },
    { id: 102, category: '疾病基础', title: '尿路上皮癌的诊断与治疗进展', summary: '掌握尿路上皮癌的流行病学、诊断指标及一线/二线治疗方案。', readCount: 1820, date: '2024-04-05' },
    // 产品知识
    { id: 201, category: '产品知识', title: 'ADC 药物作用机制及适应症全景', summary: '靶向 ADC 如何实现"生物导弹"精准打击，覆盖已获批适应症详解。', readCount: 4100, date: '2024-04-12' },
    { id: 202, category: '产品知识', title: '给药方案与治疗节点操作手册', summary: '标准 21 天周期给药流程、剂量调整原则与关键访视时间线。', readCount: 3560, date: '2024-04-08' },
    // 合规要求
    { id: 301, category: '合规要求', title: '患者隐私保护与数据合规操作指南', summary: '《个人信息保护法》在临床场景中的实施要点与红线提示。', readCount: 1950, date: '2024-03-28' },
    { id: 302, category: '合规要求', title: '知情同意流程规范与常见违规案例', summary: 'ICF 签署的标准流程、注意事项，及历年稽查中常见的违规情形。', readCount: 2780, date: '2024-03-25' },
    // AE/PV流程
    { id: 401, category: 'AE/PV流程', title: 'AE 识别、记录与分级标准 (CTCAE)', summary: '不良事件的发现、CTCAE v5.0 分级评判、CRF 记录规范。', readCount: 3200, date: '2024-04-01' },
    { id: 402, category: 'AE/PV流程', title: 'SAE 升级上报全流程与时限要求', summary: '严重不良事件的 24 小时内报告流程、申办方与伦理委员会报告模板。', readCount: 2900, date: '2024-03-30' },
    // 沟通技巧
    { id: 501, category: '沟通技巧', title: '患者焦虑情绪的识别与安抚策略', summary: '治疗不同阶段常见的心理变化，以及非医学干预的沟通话术。', readCount: 1680, date: '2024-04-15' },
    { id: 502, category: '沟通技巧', title: '失访召回的沟通技巧与话术模板', summary: '应对拒绝、犹豫、联系不上等场景的标准话术和升级策略。', readCount: 2150, date: '2024-04-09' },
    // 系统操作
    { id: 601, category: '系统操作', title: '患者建档与任务分配操作指南', summary: '从扫码入组到建档完成的全流程系统操作演示。', readCount: 1420, date: '2024-04-18' },
    { id: 602, category: '系统操作', title: '随访记录填报与数据归档操作手册', summary: '标准随访、异常回流、失访召回等各类任务的系统操作详解。', readCount: 1350, date: '2024-04-16' }
];

window.onload = () => App.init();
