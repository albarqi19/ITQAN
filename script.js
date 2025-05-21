// البيانات
const pathsData = {
    "نصف جزء": 10,
    "جزء واحد": 20,
    "جزء ونصف": 30,
    "جزئين": 40,
    "جزئين ونصف": 50,
    "3 أجزاء": 60,
    "3 أجزاء ونصف": 70,
    "4 أجزاء": 80,
    "4 أجزاء ونصف": 90,
    "5 أجزاء": 100,
    "5 أجزاء ونصف": 110,
    "6 أجزاء": 120,
    "6 أجزاء ونصف": 130,
    "7 أجزاء": 140,
    "7 أجزاء ونصف": 150,
    "8 أجزاء": 160,
    "8 أجزاء ونصف": 170,
    "9 أجزاء": 180,
    "9 أجزاء ونصف": 190,
    "10 أجزاء": 200,
    "10 أجزاء ونصف": 210,
    "11 جزء": 220,
    "12 جزء": 240,
    "13 جزء": 260,
    "14 جزء": 280,
    "15 جزء": 300,
    "16 جزء": 320,
    "17 جزء": 340,
    "18 جزء": 360,
    "19 جزء": 380,
    "20 جزء": 400,
    "21 جزء": 420,
    "22 جزء": 440,
    "23 جزء": 460,
    "24 جزء": 480,
    "25 جزء": 500,
    "26 جزء": 520,
    "27 جزء": 540,
    "28 جزء": 560,
    "29 جزء": 580,
    "30 جزء": 600
};

// تكوين بيانات الحلقات
const circlesData = [
    {
        teacher: "أيمن عوض عيد إبراهيم",
        students: [
            { id: 1, name: "أمين ذوالنون علي سلامه", path: "6 أجزاء" },
            { id: 2, name: "أنس البراء البريهي", path: "6 أجزاء" },
            { id: 3, name: "سلمان سالم مزيد المطيري", path: "4 أجزاء ونصف" },
            { id: 4, name: "عبادة محمد عاطف تليخ", path: "3 أجزاء" },
            { id: 5, name: "علي فوزي قايد عبده", path: "3 أجزاء" },
            { id: 6, name: "فلاح محمد سالم القحطاني", path: "3 أجزاء ونصف" },
            { id: 7, name: "ماجد حمود معيض النفيعي", path: "جزئين" },
            { id: 8, name: "مجد محمد المحمد", path: "3 أجزاء" },
            { id: 9, name: "وليد حمود النفيعي", path: "3 أجزاء" },
            { id: 10, name: "سليم مصلح الدوسري", path: "3 أجزاء" },
            { id: 11, name: "الخطاب سادات فارع سعيد", path: "6 أجزاء" }
        ]
    },
    {
        teacher: "أحمد عبدالمنعم عبدالقادر عبدالله",
        students: [
            { id: 1, name: "إياد حسن عبدالعظيم محمد", path: "10 أجزاء" },
            { id: 2, name: "ابراهيم حسام ابراهيم الشرافي", path: "4 أجزاء" },
            { id: 3, name: "احمد سعيد متروك المطيري", path: "4 أجزاء" },
            { id: 4, name: "البراء محمد عبداللطيف بدر", path: "10 أجزاء" },
            { id: 5, name: "شافي عبدالرحمن محمد القحطاني", path: "5 أجزاء" },
            { id: 6, name: "عبدالرحمن حسين  المرحبي", path: "3 أجزاء" },
            { id: 7, name: "عبدالعزيز أحمد  البارقي", path: "جزئين ونصف" },
            { id: 8, name: "فراج مناحي  الدوسري", path: "3 أجزاء" },
            { id: 9, name: "قصي محمد  عايش", path: "جزئين ونصف" },
            { id: 10, name: "فالح ناصر ابراهيم الشرافي", path: "4 أجزاء ونصف" },
            { id: 11, name: "محمد الناجي", path: "جزئين" }
        ]
    },
    {
        teacher: "أحمد أحمد سيد محمد",
        students: [
            { id: 1, name: "أنصاري أنصاري أنصاري", path: "10 أجزاء" },
            { id: 2, name: "إياد علاء محمود عبد العزيز", path: "5 أجزاء ونصف" },
            { id: 3, name: "عبدالله منصر الدوجري", path: "5 أجزاء" },
            { id: 4, name: "يزن أحمد أحمد سيد محمد", path: "6 أجزاء ونصف" },
            { id: 5, name: "يوسف مهدي محمد الناصري", path: "3 أجزاء" },
            { id: 6, name: "عبد الكريم سعد سعيد الأحمري", path: "3 أجزاء" },
            { id: 7, name: "سعود فارس يسلم التميمي", path: "3 أجزاء" },
            { id: 8, name: "مسفر عبدالعزيز القحطاني", path: "جزء ونصف" }
        ]
    },
    {
        teacher: "سعد الشيخ محمد الأنصاري",
        students: [
            { id: 1, name: "عبد الفتاح سعد الشيخ محمد", path: "15 جزء" },
            { id: 2, name: "أحمد محمد عبداللطيف بدر", path: "15 جزء" },
            { id: 3, name: "أسامه مصطفى السيد الطوبجي", path: "3 أجزاء" },
            { id: 4, name: "عبدالعزيز إبراهيم عبدالعزيز أبوزينه", path: "18 جزء" },
            { id: 5, name: "عمر عبدالعزيز راشد العمرو", path: "6 أجزاء" },
            { id: 6, name: "سلطان محمد سلطان الزهراني", path: "3 أجزاء" },
            { id: 7, name: "محمد أيمن مصطفى عرفات", path: "جزء واحد" },
            { id: 8, name: "معين ناصر عبدالله مسعد", path: "12 جزء" },
            { id: 9, name: "خليل ناصر عبدالله مسعد", path: "6 أجزاء" },
            { id: 10, name: "صفوان ناصر عبدالله مسعد", path: "5 أجزاء" },
            { id: 11, name: "طه محمد عبده محمد", path: "جزء ونصف" },
            { id: 12, name: "عبدالمقيت عبدالإله الماص", path: "3 أجزاء" },
            { id: 13, name: "مصعب عبدالله محمد البطاح", path: "6 أجزاء" },
            { id: 14, name: "أيمن مصطفى عرفات", path: "جزئين" }
        ]
    },
    {
        teacher: "السيد محمد سليمان الغيطاني",
        students: [
            { id: 1, name: "أحمد عبد العزيز الخلف", path: "جزئين" },
            { id: 2, name: "تيم محمد عاطف تليخ", path: "3 أجزاء" },
            { id: 3, name: "راشد حمد علي المري", path: "جزئين" },
            { id: 4, name: "راكان منصر الدوجري", path: "جزئين ونصف" },
            { id: 5, name: "سيف ايمن محمود السميري", path: "جزء واحد" },
            { id: 6, name: "صالح محسن النهدي", path: "جزء ونصف" },
            { id: 7, name: "عبدالرحمن منصر الدوجري", path: "جزئين" },
            { id: 8, name: "علاء الدين محمد المحمد", path: "3 أجزاء" },
            { id: 9, name: "مسفر مصلح الدوسري", path: "3 أجزاء" },
            { id: 10, name: "صبحي احمد عمير المعدان", path: "جزئين" },
            { id: 11, name: "عبدالعزيز محمد نايف النهدي", path: "جزء ونصف" },
            { id: 12, name: "ماجد سليمان راشد الطحيني", path: "نصف جزء" },
            { id: 13, name: "عبدالملك سالم سعيد العلي", path: "جزئين" },
            { id: 14, name: "عبداللطيف سالم سعيد العلي", path: "جزء واحد" }
        ]
    },
    {
        teacher: "أحمد عبداللطيف محمد الجمال",
        students: [
            { id: 1, name: "أحمد حسن أحمد الناشري", path: "5 أجزاء" },
            { id: 2, name: "أمير محمد عاطف تليخ", path: "4 أجزاء" },
            { id: 3, name: "البراء حسن عبدالعظيم محمد", path: "جزئين" },
            { id: 4, name: "سفيان عبدالرحمن حسن الربيّع", path: "4 أجزاء" },
            { id: 5, name: "سلمان عبدالرحمن محمد القحطاني", path: "5 أجزاء" },
            { id: 6, name: "عبدالرحمن إبراهيم أبو زينة", path: "جزئين" },
            { id: 7, name: "عبدالرحمن سادات المحمودي", path: "4 أجزاء" },
            { id: 8, name: "عبدالله عمر عبدالله الجفان", path: "3 أجزاء" },
            { id: 9, name: "عوض حسين المرحبي", path: "3 أجزاء" },
            { id: 10, name: "محمد مناحي فراج الدوسري", path: "جزئين" }        ]
    }
];

// تخزين بيانات الإدخال في ذاكرة التخزين المحلية
let savedData = localStorage.getItem('circlesProgressData');
let circlesProgressData = savedData ? JSON.parse(savedData) : [];

// التهيئة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تحديث السنة الحالية في الفوتر
    document.getElementById('current-year').textContent = new Date().getFullYear();
      // تهيئة بيانات الحلقات إذا لم تكن موجودة
    if (circlesProgressData.length === 0) {
        circlesProgressData = circlesData.map((circle, circleIndex) => {
            return {
                teacher: circle.teacher,
                students: circle.students.map((student, studentIndex) => {
                    // إضافة قيم افتراضية متغيرة لكل طالب للاختبار فقط
                    // في التطبيق الفعلي، ستبدأ هذه القيم فارغة ويتم إدخالها من قبل المستخدم
                    const completedPagesDefault = Math.floor(Math.random() * 20) + 1; // قيمة عشوائية بين 1 و 20
                    const errorsDefault = Math.floor(Math.random() * 5); // قيمة عشوائية بين 0 و 4
                    
                    return {
                        ...student,
                        completedPages: completedPagesDefault.toString(),
                        errors: errorsDefault.toString(),
                        isPresent: true
                    };
                })
            };
        });
        localStorage.setItem('circlesProgressData', JSON.stringify(circlesProgressData));
    } else {
        // حذف حلقة "محمد مصطفى إبراهيم الوكيل" من بيانات التقدم إذا كانت موجودة
        circlesProgressData = circlesProgressData.filter(circle => circle.teacher !== "محمد مصطفى إبراهيم الوكيل");
        localStorage.setItem('circlesProgressData', JSON.stringify(circlesProgressData));
    }
    
    // عرض الحلقات
    renderCircles();
    
    // تحديث الإحصائيات
    updateStatistics();
    
    // تهيئة النافذة المنبثقة لإضافة طالب
    initAddStudentModal();
    
    // إضافة مستمعي الأحداث
    document.getElementById('search-input').addEventListener('input', filterCircles);
    document.getElementById('sort-select').addEventListener('change', sortCircles);
    
    // إضافة مستمع حدث لزر تصدير البيانات
    document.getElementById('export-data-btn').addEventListener('click', exportDataToFile);
    
    // إضافة مستمع حدث لزر استيراد البيانات
    document.getElementById('import-data-btn').addEventListener('click', function() {
        document.getElementById('import-file-input').click();
    });
    
    // إضافة مستمع حدث لتغيير الملف
    document.getElementById('import-file-input').addEventListener('change', function(event) {
        if (event.target.files.length > 0) {
            importDataFromFile(event.target.files[0]);
        }
    });
});

// عرض الحلقات في الصفحة
function renderCircles() {
    const circlesList = document.getElementById('circles-list');
    circlesList.innerHTML = '';
    
    circlesProgressData.forEach((circle, circleIndex) => {
        // استنساخ قالب الحلقة
        const template = document.getElementById('circle-template');
        const circleElement = document.importNode(template.content, true);
        
        // تعبئة بيانات الحلقة
        circleElement.querySelector('.circle-title').textContent = circle.teacher;
        
        // تعبئة بيانات الطلاب
        const tableBody = circleElement.querySelector('tbody');
        
        circle.students.forEach((student, studentIndex) => {
            const row = document.createElement('tr');
              // احتساب الصفحات المطلوبة والنقاط لكل صفحة
            const requiredPages = pathsData[student.path] || 0;
            const pointsPerPage = calculatePointsPerPage(student.path);
              // إنشاء خلايا الجدول
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>
                    <select class="path-select" data-circle="${circleIndex}" data-student="${studentIndex}">
                        ${Object.keys(pathsData).map(path => `<option value="${path}" ${student.path === path ? 'selected' : ''}>${path}</option>`).join('')}
                    </select>
                </td>
                <td>${requiredPages}</td>
                <td><span class="points-per-page">${pointsPerPage.toFixed(1)}</span></td>
                <td>
                    <input type="number" class="page-input" value="${student.completedPages}" 
                           ${!student.isPresent ? 'disabled' : ''}
                           data-circle="${circleIndex}" data-student="${studentIndex}">
                </td>
                <td>
                    <input type="number" class="error-input" value="${student.errors}" 
                           ${!student.isPresent ? 'disabled' : ''}
                           data-circle="${circleIndex}" data-student="${studentIndex}">
                </td>
                <td>
                    <button class="attendance-toggle ${!student.isPresent ? 'absent' : ''}" 
                            data-circle="${circleIndex}" data-student="${studentIndex}">
                        ${student.isPresent ? 'حاضر' : 'غائب'}
                    </button>
                </td>
            `;
            
            tableBody.appendChild(row);
        });          // احتساب وعرض نسبة الإنجاز والنقاط للحلقة وفق المعايير الموحدة
        const progress = calculateCircleProgress(circle);
        
        // حساب النقاط وفق المعايير الموحدة (النتيجة الإجمالية)
        const circleData = {
            teacher: circle.teacher,
            students: circle.students,
            index: circleIndex,
            progress: progress,
            errors: calculateCircleErrors(circle),
            hasErrorsData: hasErrorsData(circle)
        };
        
        // إنشاء كائن الحلقة المقيمة للحصول على النتيجة الإجمالية
        const evaluatedCircle = evaluateCircleByUnifiedCriteria(circleData);
        const totalScore = evaluatedCircle.totalScore;
        
        const progressBar = circleElement.querySelector('.progress-bar');
        const progressText = circleElement.querySelector('.progress-text');
        const pointsValue = circleElement.querySelector('.points-value');
        
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress.toFixed(1)}%`;
        pointsValue.textContent = totalScore.toFixed(1);
          // التحقق مما إذا كانت الحلقة تفتقد لبيانات الأخطاء
        if (!hasErrorsData(circle)) {
            const headerElement = circleElement.querySelector('.circle-header');
            const warningElement = document.createElement('div');
            warningElement.className = 'circle-warning circle-error';
            warningElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i> لم يتم إدخال الأخطاء للطلاب في هذه الحلقة';
            headerElement.after(warningElement);
        }
        
        // إضافة مستمع حدث لزر الحفظ
        const saveButton = circleElement.querySelector('.save-btn');
        saveButton.addEventListener('click', function() {
            saveCircleData(circleIndex);
        });
        
        // إضافة مستمع حدث لزر إضافة طالب
        const addStudentBtn = circleElement.querySelector('.add-student-btn');
        addStudentBtn.addEventListener('click', function() {
            openAddStudentModal(circleIndex);
        });
        
        // إضافة الحلقة إلى القائمة
        circlesList.appendChild(circleElement);
    });
    
    // إضافة مستمعي الأحداث لأزرار الحضور/الغياب
    document.querySelectorAll('.attendance-toggle').forEach(button => {
        button.addEventListener('click', function() {
            const circleIndex = parseInt(this.dataset.circle);
            const studentIndex = parseInt(this.dataset.student);
            toggleAttendance(circleIndex, studentIndex);
        });
    });
    
    // إضافة مستمعي الأحداث لحقول الإدخال
    document.querySelectorAll('.page-input, .error-input').forEach(input => {
        input.addEventListener('input', function() {
            const circleIndex = parseInt(this.dataset.circle);
            const studentIndex = parseInt(this.dataset.student);
            const isPage = this.classList.contains('page-input');
            
            if (isPage) {
                circlesProgressData[circleIndex].students[studentIndex].completedPages = this.value;
            } else {
                circlesProgressData[circleIndex].students[studentIndex].errors = this.value;
            }
        });
    });

    // إضافة مستمعي الأحداث لتغيير المسار
    document.querySelectorAll('.path-select').forEach(select => {
        select.addEventListener('change', function() {
            const circleIndex = parseInt(this.dataset.circle);
            const studentIndex = parseInt(this.dataset.student);
            const newPath = this.value;
            const oldPath = circlesProgressData[circleIndex].students[studentIndex].path;
            
            // تحديث المسار
            circlesProgressData[circleIndex].students[studentIndex].path = newPath;
            
            // تحديث عدد الصفحات المطلوبة في الواجهة
            const row = this.closest('tr');
            const requiredPagesCell = row.cells[3]; // خلية الصفحات المطلوبة
            const pointsPerPageCell = row.cells[4].querySelector('.points-per-page'); // خلية النقاط لكل صفحة
            
            // حساب القيم الجديدة
            const newRequiredPages = pathsData[newPath] || 0;
            const newPointsPerPage = calculatePointsPerPage(newPath);
            
            // تحديث القيم في الواجهة
            requiredPagesCell.textContent = newRequiredPages;
            pointsPerPageCell.textContent = newPointsPerPage.toFixed(1);
            
            // تحديث الإحصائيات والرسوم البيانية
            updateStatistics();
            
            // عرض رسالة للمستخدم
            showNotification(`تم تغيير مسار الطالب من "${oldPath}" إلى "${newPath}"`);
        });
    });
}

// حساب النقاط لكل صفحة بناءً على المسار
function calculatePointsPerPage(path) {
    // استخراج عدد الأجزاء من المسار
    let match;
    let numOfParts = 0;
    
    if (path.includes("نصف")) {
        numOfParts = 0.5;
    } else if (path.includes("جزء واحد")) {
        numOfParts = 1;
    } else if ((match = path.match(/(\d+)\s+أجزاء/)) || (match = path.match(/(\d+)\s+جزء/))) {
        numOfParts = parseInt(match[1]);
    } else if ((match = path.match(/جزئين/))) {
        numOfParts = 2;
    }
    
    // حساب النقاط (كلما زاد عدد الأجزاء، زادت النقاط لكل صفحة)
    // صيغة بسيطة: النقاط = 1 + (عدد الأجزاء / 10)
    const points = 1 + (numOfParts / 10);
    return points;
}

// احتساب نسبة الإنجاز للحلقة
function calculateCircleProgress(circle) {
    let totalRequiredPages = 0;
    let totalCompletedPages = 0;
    
    circle.students.forEach(student => {
        const requiredPages = pathsData[student.path] || 0;
        totalRequiredPages += requiredPages;
        
        // إذا كان الطالب حاضراً، نضيف الصفحات المنجزة
        if (student.isPresent) {
            const completedPages = parseInt(student.completedPages) || 0;
            totalCompletedPages += completedPages;
        }
    });
    
    return totalRequiredPages === 0 ? 0 : (totalCompletedPages / totalRequiredPages) * 100;
}

// احتساب النقاط للحلقة
function calculateCirclePoints(circle) {
    let totalPoints = 0;
    
    circle.students.forEach(student => {
        if (student.isPresent) {
            const completedPages = parseInt(student.completedPages) || 0;
            const pointsPerPage = calculatePointsPerPage(student.path);
            const errors = parseInt(student.errors) || 0;
            
            // خصم 0.1 نقطة لكل خطأ
            const errorDeduction = errors * 0.1;
            
            // النقاط النهائية = (عدد الصفحات × النقاط لكل صفحة) - خصم الأخطاء
            const studentPoints = Math.max(0, (completedPages * pointsPerPage) - errorDeduction);
            totalPoints += studentPoints;
        }
    });
    
    return totalPoints;
}

// احتساب متوسط الأخطاء للحلقة
function calculateCircleErrors(circle) {
    let totalStudents = 0;
    let totalErrors = 0;
    
    circle.students.forEach(student => {
        if (student.isPresent && student.completedPages) {
            totalStudents++;
            totalErrors += parseInt(student.errors) || 0;
        }
    });
    
    return totalStudents === 0 ? 0 : totalErrors / totalStudents;
}

// تبديل حالة الحضور/الغياب للطالب
function toggleAttendance(circleIndex, studentIndex) {
    const student = circlesProgressData[circleIndex].students[studentIndex];
    student.isPresent = !student.isPresent;
    
    // تحديث واجهة المستخدم
    const button = document.querySelector(`.attendance-toggle[data-circle="${circleIndex}"][data-student="${studentIndex}"]`);
    const pageInput = document.querySelector(`.page-input[data-circle="${circleIndex}"][data-student="${studentIndex}"]`);
    const errorInput = document.querySelector(`.error-input[data-circle="${circleIndex}"][data-student="${studentIndex}"]`);
    
    if (student.isPresent) {
        button.textContent = 'حاضر';
        button.classList.remove('absent');
        pageInput.disabled = false;
        errorInput.disabled = false;
    } else {
        button.textContent = 'غائب';
        button.classList.add('absent');
        pageInput.disabled = true;
        errorInput.disabled = true;
    }
}

// حفظ بيانات الحلقة
function saveCircleData(circleIndex) {
    localStorage.setItem('circlesProgressData', JSON.stringify(circlesProgressData));
    
    // تحديث الإحصائيات
    updateStatistics();
    
    // إظهار رسالة النجاح
    const alert = document.getElementById('success-alert');
    alert.classList.add('show');
    
    // إخفاء الرسالة بعد ثوانٍ
    setTimeout(() => {
        alert.classList.remove('show');
    }, 3000);
}

// عرض إشعار للمستخدم
function showNotification(message) {
    const alert = document.getElementById('success-alert');
    alert.innerHTML = `<span>${message}</span>`;
    alert.classList.add('show');
    
    // إخفاء الرسالة بعد 3 ثوانٍ
    setTimeout(() => {
        alert.classList.remove('show');
        // إعادة النص الأصلي للرسالة
        setTimeout(() => {
            alert.innerHTML = '<span>تم حفظ البيانات بنجاح!</span>';
        }, 300);
    }, 3000);
}

// تصدير البيانات إلى ملف نصي
function exportDataToFile() {
    try {
        // استرجاع البيانات المحفوظة من التخزين المحلي
        const savedData = localStorage.getItem('circlesProgressData');
        // التأكد من وجود بيانات للتصدير
        if (!savedData) {
            throw new Error('لا توجد بيانات للتصدير');
        }
        
        // تحضير البيانات للتصدير (بتنسيق JSON مقروء)
        const exportData = {
            timestamp: new Date().toLocaleString('ar-SA'),
            version: "1.0",
            progress: JSON.parse(savedData)
        };
        
        // تحويل البيانات إلى سلسلة نصية JSON مع تنسيق مناسب للقراءة
        const jsonData = JSON.stringify(exportData, null, 2);
        
        // إنشاء ملف blob
        const blob = new Blob([jsonData], { type: 'application/json' });
        
        // إنشاء رابط تنزيل الملف
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        
        // تحديد اسم الملف (بالتاريخ والوقت)
        const now = new Date();
        const dateStr = now.toLocaleDateString('ar-SA').replace(/\//g, '-');
        const timeStr = now.toLocaleTimeString('ar-SA').replace(/:/g, '-');
        downloadLink.download = `بيانات_إتقان_${dateStr}_${timeStr}.json`;
        
        // إضافة الرابط إلى المستند وتنفيذ النقر عليه
        document.body.appendChild(downloadLink);
        downloadLink.click();
        
        // حذف الرابط بعد التنزيل
        setTimeout(() => {
            document.body.removeChild(downloadLink);
            URL.revokeObjectURL(downloadLink.href);
        }, 100);
        
        // إظهار رسالة نجاح
        const alert = document.getElementById('success-alert');
        alert.innerHTML = '<span>تم تصدير البيانات بنجاح!</span>';
        alert.classList.add('show');
        
        // إخفاء الرسالة بعد 3 ثوانٍ
        setTimeout(() => {
            alert.classList.remove('show');
            // إعادة النص الأصلي للرسالة
            setTimeout(() => {
                alert.innerHTML = '<span>تم حفظ البيانات بنجاح!</span>';
            }, 300);
        }, 3000);
    } catch (error) {
        console.error("خطأ في تصدير البيانات:", error);
        // إظهار رسالة الخطأ
        const alert = document.getElementById('success-alert');
        alert.innerHTML = '<span>حدث خطأ أثناء تصدير البيانات</span>';
        alert.classList.add('show');
        
        // إخفاء الرسالة بعد 3 ثوانٍ
        setTimeout(() => {
            alert.classList.remove('show');
            // إعادة النص الأصلي للرسالة
            setTimeout(() => {
                alert.innerHTML = '<span>تم حفظ البيانات بنجاح!</span>';
            }, 300);
        }, 3000);
    }
}

// وظيفة استيراد البيانات من ملف
function importDataFromFile(file) {
    const reader = new FileReader();
    
    reader.onload = function(event) {
        try {
            const jsonData = JSON.parse(event.target.result);
            
            // التحقق من صحة البيانات
            if (!jsonData || !jsonData.progress || !Array.isArray(jsonData.progress)) {
                throw new Error('صيغة الملف غير صحيحة، يجب أن يحتوي الملف على بيانات صالحة');
            }
            
            // التحقق من تنسيق البيانات
            const isValidFormat = jsonData.progress.every(circle => {
                return circle.teacher && Array.isArray(circle.students) && circle.students.every(student => {
                    return student.id && student.name && student.path !== undefined;
                });
            });
            
            if (!isValidFormat) {
                throw new Error('بنية البيانات غير صحيحة، تأكد من استيراد ملف بيانات صحيح من النظام');
            }
            
            // تحديث البيانات
            circlesProgressData = jsonData.progress;
            localStorage.setItem('circlesProgressData', JSON.stringify(circlesProgressData));
            
            // إعادة عرض الحلقات وتحديث الإحصائيات
            renderCircles();
            updateStatistics();
            
            // إظهار رسالة نجاح
            const alert = document.getElementById('success-alert');
            alert.innerHTML = '<span>تم استيراد البيانات بنجاح!</span>';
            alert.classList.add('show');
            
            // إخفاء الرسالة بعد 3 ثوانٍ
            setTimeout(() => {
                alert.classList.remove('show');
                // إعادة النص الأصلي للرسالة
                setTimeout(() => {
                    alert.innerHTML = '<span>تم حفظ البيانات بنجاح!</span>';
                }, 300);
            }, 3000);
            
            // إعادة تعيين حقل الإدخال
            document.getElementById('import-file-input').value = '';
            
        } catch (error) {
            // إعادة تعيين حقل الإدخال
            document.getElementById('import-file-input').value = '';
            
            // إظهار رسالة الخطأ
            const alert = document.getElementById('success-alert');
            alert.innerHTML = `<span>خطأ: ${error.message}</span>`;
            alert.style.backgroundColor = 'var(--danger-color)';
            alert.classList.add('show');
            
            // إخفاء الرسالة بعد 5 ثوانٍ
            setTimeout(() => {
                alert.classList.remove('show');
                // إعادة النص واللون الأصلي للرسالة
                setTimeout(() => {
                    alert.innerHTML = '<span>تم حفظ البيانات بنجاح!</span>';
                    alert.style.backgroundColor = 'var(--success-color)';
                }, 300);
            }, 5000);
            
            console.error('خطأ في استيراد البيانات:', error);
        }
    };
    
    reader.onerror = function() {
        const alert = document.getElementById('success-alert');
        alert.innerHTML = '<span>حدث خطأ أثناء قراءة الملف</span>';
        alert.style.backgroundColor = 'var(--danger-color)';
        alert.classList.add('show');
        
        // إخفاء الرسالة بعد 5 ثوانٍ
        setTimeout(() => {
            alert.classList.remove('show');
            // إعادة النص واللون الأصلي للرسالة
            setTimeout(() => {
                alert.innerHTML = '<span>تم حفظ البيانات بنجاح!</span>';
                alert.style.backgroundColor = 'var(--success-color)';
            }, 300);
        }, 5000);
        
        console.error('خطأ في قراءة الملف');
    };
    
    reader.readAsText(file);
}

// تصفية الحلقات بناءً على البحث
function filterCircles() {
    const searchValue = document.getElementById('search-input').value.trim().toLowerCase();
    const circleCards = document.querySelectorAll('.circle-card');
    
    circleCards.forEach((card, index) => {
        const circle = circlesProgressData[index];
        const teacherName = circle.teacher.toLowerCase();
        
        // البحث في اسم المعلم
        let found = teacherName.includes(searchValue);
        
        // البحث في أسماء الطلاب
        if (!found) {
            found = circle.students.some(student => student.name.toLowerCase().includes(searchValue));
        }
        
        card.style.display = found ? 'block' : 'none';
    });
}

// ترتيب الحلقات
function sortCircles() {
    const sortValue = document.getElementById('sort-select').value;
    const circlesList = document.getElementById('circles-list');
    const circleCards = Array.from(circlesList.children);
    
    // ترتيب البطاقات بناءً على المعيار المختار
    circleCards.sort((a, b) => {
        const indexA = Array.from(circlesList.children).indexOf(a);
        const indexB = Array.from(circlesList.children).indexOf(b);
        const circleA = circlesProgressData[indexA];
        const circleB = circlesProgressData[indexB];
        
        if (sortValue === 'progress') {
            // ترتيب حسب نسبة الإنجاز (تنازلي)
            return calculateCircleProgress(circleB) - calculateCircleProgress(circleA);
        } else if (sortValue === 'points') {
            // ترتيب حسب النتيجة الإجمالية وفق المعايير الموحدة (تنازلي)
            const scoreA = evaluateCircleByUnifiedCriteria({
                teacher: circleA.teacher,
                students: circleA.students,
                progress: calculateCircleProgress(circleA),
                errors: calculateCircleErrors(circleA),
                hasErrorsData: hasErrorsData(circleA)
            }).totalScore;
            
            const scoreB = evaluateCircleByUnifiedCriteria({
                teacher: circleB.teacher,
                students: circleB.students,
                progress: calculateCircleProgress(circleB),
                errors: calculateCircleErrors(circleB),
                hasErrorsData: hasErrorsData(circleB)
            }).totalScore;
            
            return scoreB - scoreA;
        } else if (sortValue === 'errors') {
            // ترتيب حسب عدد الأخطاء (تصاعدي)
            return calculateCircleErrors(circleA) - calculateCircleErrors(circleB);
        } else {
            // ترتيب أبجدي
            return circleA.teacher.localeCompare(circleB.teacher);
        }
    });
    
    // إعادة ترتيب العناصر في DOM
    circleCards.forEach(card => circlesList.appendChild(card));
}

// رسم مخطط الإنجاز
let progressChart = null;

function drawProgressChart(data) {
    // تحديث أو إنشاء مخطط نسبة الإنجاز
    if (progressChart) {
        progressChart.destroy();
    }
    
    const ctx = document.getElementById('progress-chart').getContext('2d');
    progressChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['منجز', 'متبقي'],
            datasets: [{
                data: [data.completed, data.remaining],
                backgroundColor: [
                    '#00a99d', // فيروزي
                    '#1e1a5c'  // أزرق داكن
                ],
                borderWidth: 0,
                hoverOffset: 15,
                borderRadius: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            family: 'IBM Plex Sans Arabic',
                            size: 14
                        },
                        color: '#1e1a5c',
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const labelIndex = context.dataIndex;
                            const value = context.dataset.data[labelIndex];
                            const total = data.completed + data.remaining;
                            const percentage = total === 0 ? 0 : Math.round(value / total * 100);
                            return `${context.label}: ${value} صفحة (${percentage}%)`;
                        }
                    }
                }
            }
        }    });
    
    // تحديث الإحصائيات الرقمية بجانب الرسم البياني
    updateChartStats(data);
}

// تحديث إحصائيات الرسم البياني
function updateChartStats(data) {
    const statsContainer = document.getElementById('progress-stats');
    if (!statsContainer) return;
    
    // حساب النسبة المئوية
    const total = data.completed + data.remaining;
    const completedPercentage = total === 0 ? 0 : (data.completed / total * 100).toFixed(1);
    
    // تنسيق الأرقام لتسهيل قراءتها
    const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    
    statsContainer.innerHTML = `
        <div class="stat-item completed">
            <span class="stat-label">الصفحات المنجزة</span>
            <span class="stat-value">${formatNumber(data.completed)}</span>
            <span class="stat-percentage">(${completedPercentage}%)</span>
        </div>
        <div class="stat-item remaining">
            <span class="stat-label">الصفحات المتبقية</span>
            <span class="stat-value">${formatNumber(data.remaining)}</span>
            <span class="stat-percentage">(${(100 - completedPercentage).toFixed(1)}%)</span>
        </div>
        <div class="stat-item total">
            <span class="stat-label">إجمالي الصفحات</span>
            <span class="stat-value">${formatNumber(total)}</span>
        </div>
    `;
}

// تم إزالة وظيفة رسم مخطط الأخطاء

// تحديث الإحصائيات العامة
function updateStatistics() {
    // احتساب نسبة الإنجاز الكلية
    let totalRequiredPages = 0;
    let totalCompletedPages = 0;
    
    circlesProgressData.forEach(circle => {
        circle.students.forEach(student => {
            const requiredPages = pathsData[student.path] || 0;
            totalRequiredPages += requiredPages;
            
            if (student.isPresent) {
                const completedPages = parseInt(student.completedPages) || 0;
                totalCompletedPages += completedPages;
            }
        });
    });
    
    const totalProgress = totalRequiredPages === 0 ? 0 : (totalCompletedPages / totalRequiredPages) * 100;
    
    // تحديث شريط التقدم الكلي
    const totalProgressBar = document.getElementById('total-progress');
    const totalProgressText = document.getElementById('total-progress-text');
    
    totalProgressBar.style.width = `${totalProgress}%`;
    totalProgressText.textContent = `${totalProgress.toFixed(1)}%`;
    
    // تحديث ترتيب الحلقات
    updateCircleRanking();
    
    // تحديث أفضل ثلاث حلقات والحلقة الفائزة
    updateTopCirclesAndWinner();
      // رسم المخططات البيانية
    drawProgressChart({
        completed: totalCompletedPages,
        remaining: totalRequiredPages - totalCompletedPages
    });
    
    console.log("تم تحديث الإحصائيات بنجاح");
}

// فحص ما إذا كانت الحلقة تحتوي على بيانات أخطاء للطلاب
function hasErrorsData(circle) {
    // تحقق مما إذا كان أي طالب حاضر لديه صفحات منجزة ولكن لا توجد بيانات أخطاء
    if (!circle || !circle.students || circle.students.length === 0) return true;
    
    let hasCompletedPages = false;
    let hasErrorData = false;
    
    for (const student of circle.students) {
        const completedPages = parseInt(student.completedPages) || 0;
        if (student.isPresent && completedPages > 0) {
            hasCompletedPages = true;
            
            // إذا كان الطالب لديه على الأقل قيمة واحدة للأخطاء (حتى لو كانت 0)
            if (student.errors !== "" && student.errors !== undefined && student.errors !== null) {
                hasErrorData = true;
                break;
            }
        }
    }
    
    // إذا كانت هناك صفحات منجزة ولكن لا يوجد بيانات أخطاء، فيجب إظهار التنبيه
    return !(hasCompletedPages && !hasErrorData);
}

// تحديث ترتيب الحلقات
function updateCircleRanking() {
    const rankingContainer = document.getElementById('circles-ranking');
    rankingContainer.innerHTML = '';
    
    // إنشاء مصفوفة مع مؤشرات الحلقات ونسب الإنجاز
    const ranking = circlesProgressData.map((circle, index) => {
        return {
            index,
            teacher: circle.teacher,
            progress: calculateCircleProgress(circle),
            hasErrors: hasErrorsData(circle)
        };
    });
    
    // ترتيب حسب نسبة الإنجاز تنازلياً
    ranking.sort((a, b) => b.progress - a.progress);
    
    // عرض أعلى 6 حلقات (تم تغييرها من 5 إلى 6)
    const topCount = Math.min(6, ranking.length);
    for (let i = 0; i < topCount; i++) {
        const item = ranking[i];
        const rankingItem = document.createElement('div');
        rankingItem.className = 'ranking-item';
        
        // إضافة تصنيف للمراكز الثلاثة الأولى
        if (i < 3) {
            rankingItem.classList.add(`top-${i+1}`);
        }
        
        // إضافة علامة تنبيه إلى اسم المعلم إذا لم يتم إدخال الأخطاء
        let teacherNameDisplay = item.teacher;
        if (!item.hasErrors) {
            teacherNameDisplay = `${item.teacher} <span class="error-warning"><i class="fas fa-exclamation-triangle"></i> لم يتم إدخال الأخطاء</span>`;
        }
        
        // إنشاء العنصر الأساسي للحلقة
        rankingItem.innerHTML = `
            <span>${i+1}. ${teacherNameDisplay}</span>
            <span>${item.progress.toFixed(1)}%</span>
        `;
        
        // إضافة الحلقة إلى القائمة
        rankingContainer.appendChild(rankingItem);
    }
}

// تحديث معلومات الحلقة الأفضل
function updateBestCircle() {
    // البحث عن الحلقة ذات أعلى نسبة إنجاز
    let bestCircleIndex = -1;
    let bestProgress = -1;
    
    circlesProgressData.forEach((circle, index) => {
        const progress = calculateCircleProgress(circle);
        if (progress > bestProgress) {
            bestProgress = progress;
            bestCircleIndex = index;
        }
    });
    
    // تحديث معلومات الحلقة الأفضل
    if (bestCircleIndex >= 0) {
        const bestCircle = circlesProgressData[bestCircleIndex];
        const errors = calculateCircleErrors(bestCircle);
        const points = calculateCirclePoints(bestCircle);
        const hasErrorsInfo = hasErrorsData(bestCircle);
        
        document.getElementById('best-circle-name').textContent = bestCircle.teacher;
        document.getElementById('best-circle-progress').textContent = `${bestProgress.toFixed(1)}%`;
        document.getElementById('best-circle-points').textContent = points.toFixed(1);
        document.getElementById('best-circle-errors').textContent = errors.toFixed(1);
        
        // التحقق من عرض تنبيه للأخطاء المفقودة
        const bestCircleInfo = document.getElementById('best-circle-info');
        
        // إزالة أي تنبيه موجود سابقاً
        const existingWarning = bestCircleInfo.querySelector('.circle-warning');
        if (existingWarning) {
            existingWarning.remove();
        }
          // إضافة تنبيه إذا كانت الحلقة الأفضل تفتقد لبيانات الأخطاء
        if (!hasErrorsInfo) {
            const warningElement = document.createElement('div');
            warningElement.className = 'circle-warning circle-error';
            warningElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i> لم يتم إدخال الأخطاء للطلاب في هذه الحلقة';
            bestCircleInfo.appendChild(warningElement);
        }
    }
}

// تهيئة النافذة المنبثقة لإضافة طالب
function initAddStudentModal() {
    const modal = document.getElementById('add-student-modal');
    const closeBtn = modal.querySelector('.close-modal');
    const cancelBtn = modal.querySelector('.cancel-btn');
    const studentPathSelect = document.getElementById('student-path');
    const form = document.getElementById('add-student-form');
    
    // ملء قائمة المسارات المتاحة
    for (const path in pathsData) {
        const option = document.createElement('option');
        option.value = path;
        option.textContent = path;
        studentPathSelect.appendChild(option);
    }
    
    // إضافة مستمعات الأحداث للإغلاق
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    
    // عند النقر خارج النافذة
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // معالجة إرسال النموذج
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addNewStudent();
    });
    
    function closeModal() {
        modal.classList.remove('show');
    }
}

// فتح النافذة المنبثقة لإضافة طالب
function openAddStudentModal(circleIndex) {
    const modal = document.getElementById('add-student-modal');
    document.getElementById('circle-index').value = circleIndex;
    document.getElementById('student-name').value = '';
    document.getElementById('student-path').selectedIndex = 0;
    
    modal.classList.add('show');
}

// إضافة طالب جديد
function addNewStudent() {
    const circleIndex = parseInt(document.getElementById('circle-index').value);
    const studentName = document.getElementById('student-name').value.trim();
    const studentPath = document.getElementById('student-path').value;
    
    if (!studentName || !studentPath) {
        return;
    }
    
    // توليد هوية جديدة للطالب
    const circle = circlesProgressData[circleIndex];
    const newId = circle.students.length > 0 ? Math.max(...circle.students.map(s => s.id)) + 1 : 1;
    
    // إنشاء بيانات الطالب الجديد
    const newStudent = {
        id: newId,
        name: studentName,
        path: studentPath,
        completedPages: "",
        errors: "",
        isPresent: true
    };
    
    // إضافة الطالب إلى الحلقة
    circle.students.push(newStudent);
    
    // حفظ البيانات
    localStorage.setItem('circlesProgressData', JSON.stringify(circlesProgressData));
    
    // إعادة عرض الحلقات
    renderCircles();
    
    // تحديث الإحصائيات
    updateStatistics();
    
    // إغلاق النافذة المنبثقة
    document.getElementById('add-student-modal').classList.remove('show');
    
    // إظهار رسالة النجاح
    const alert = document.getElementById('success-alert');
    alert.querySelector('span').textContent = 'تمت إضافة الطالب بنجاح!';
    alert.classList.add('show');
    
    // إخفاء الرسالة بعد ثوانٍ
    setTimeout(() => {
        alert.classList.remove('show');
    }, 3000);
}

// تقييم الحلقات واختيار الفائز
function evaluateAndRankCircles() {
    // معايير التقييم للحلقات
    const criteria = [
        // نسبة الإنجاز (الوزن: 50%)
        {
            name: "نسبة الإنجاز",
            weight: 0.50,
            evaluate: (circle) => calculateCircleProgress(circle)
        },
        // معدل الأخطاء (معكوس) (الوزن: 30%)
        {
            name: "قلة الأخطاء",
            weight: 0.30,
            evaluate: (circle) => {
                // تحقق من وجود بيانات أخطاء
                if (!hasErrorsData(circle)) return 0;
                
                const errorRate = calculateCircleErrors(circle);
                // معكوس معدل الأخطاء: كلما قل عدد الأخطاء، زادت النقاط
                return errorRate === 0 ? 100 : 100 / (1 + errorRate);
            }
        },
        // نسبة الحضور (الوزن: 20%)
        {
            name: "نسبة الحضور",
            weight: 0.20,
            evaluate: (circle) => {
                if (circle.students.length === 0) return 0;
                const presentCount = circle.students.filter(s => s.isPresent).length;
                return (presentCount / circle.students.length) * 100;
            }
        }
    ];    // تقييم كل حلقة بناءً على المعايير
    const evaluatedCircles = [];
    
    // تأكد من وجود البيانات
    if (circlesProgressData && circlesProgressData.length > 0) {
        circlesProgressData.forEach((circle, index) => {
            let totalScore = 0;
            const criteriaScores = [];
            
            // حساب النقاط لكل معيار
            for (const criterion of criteria) {
                const score = criterion.evaluate(circle);
                const weightedScore = score * criterion.weight;
                totalScore += weightedScore;
                
                criteriaScores.push({
                    name: criterion.name,
                    score,
                    weightedScore,
                    weight: criterion.weight
                });
            }
            
            evaluatedCircles.push({
                index,
                teacher: circle.teacher,
                totalScore,
                criteriaScores,
                progress: calculateCircleProgress(circle),
                points: calculateCirclePoints(circle),
                errors: calculateCircleErrors(circle),
                hasErrorsData: hasErrorsData(circle),
                presentRatio: circle.students.filter(s => s.isPresent).length / circle.students.length
            });
        });
    }
    
    // ترتيب الحلقات حسب النقاط الإجمالية
    evaluatedCircles.sort((a, b) => b.totalScore - a.totalScore);
    
    return evaluatedCircles;
}

// عرض أفضل ثلاث حلقات
function displayTopCircles() {
    const evaluatedCircles = evaluateAndRankCircles();
    const topCirclesContainer = document.getElementById('top-circles-container');
    
    // مسح المحتوى السابق
    topCirclesContainer.innerHTML = '';
    
    // التحقق من وجود بيانات
    if (!evaluatedCircles || evaluatedCircles.length === 0) {
        const noDataElement = document.createElement('div');
        noDataElement.className = 'no-data-message';
        noDataElement.textContent = 'لا توجد بيانات متاحة حاليًا';
        topCirclesContainer.appendChild(noDataElement);
        return;
    }
    
    // عرض أفضل ثلاث حلقات
    const topCount = Math.min(3, evaluatedCircles.length);
    for (let i = 0; i < topCount; i++) {
        const circle = evaluatedCircles[i];
        
        const topCircleElement = document.createElement('div');
        topCircleElement.className = 'top-circle';
        
        // إضافة تصنيف للمراكز الثلاثة
        topCircleElement.classList.add(`rank-${i+1}`);
        
        // إضافة رمز للمركز
        const rankIcon = i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉';
          // إنشاء المحتوى
        topCircleElement.innerHTML = `
            <div class="top-circle-rank">${rankIcon} المركز ${i+1}</div>
            <div class="top-circle-name">${circle.teacher}</div>
            <div class="top-circle-stats">
                <div class="stat">
                    <span class="stat-label">نسبة الإنجاز:</span>
                    <span class="stat-value">${circle.progress.toFixed(1)}%</span>
                </div>
                <div class="stat">
                    <span class="stat-label">النتيجة الإجمالية:</span>
                    <span class="stat-value">${circle.totalScore.toFixed(1)} نقطة</span>
                </div>
                <div class="stat">
                    <span class="stat-label">متوسط الأخطاء:</span>
                    <span class="stat-value">${circle.errors.toFixed(1)}</span>
                </div>
            </div>
            ${!circle.hasErrorsData ? '<div class="circle-warning"><i class="fas fa-exclamation-triangle"></i> لم يتم إدخال الأخطاء</div>' : ''}
        `;
        
        topCirclesContainer.appendChild(topCircleElement);
    }
}

// عرض الحلقة الفائزة مع شرح معايير الاختيار
function displayWinnerCircle() {
    const evaluatedCircles = evaluateAndRankCircles();
    const winnerCircleContainer = document.getElementById('winner-circle-container');
    const winnerCriteriaList = document.getElementById('winner-criteria');
    
    // مسح المحتوى السابق
    winnerCircleContainer.innerHTML = '';
    winnerCriteriaList.innerHTML = '';
    
    // التحقق من وجود حلقات
    if (!evaluatedCircles || evaluatedCircles.length === 0) {
        const noDataElement = document.createElement('div');
        noDataElement.className = 'no-data-message';
        noDataElement.textContent = 'لا توجد بيانات متاحة حاليًا';
        winnerCircleContainer.appendChild(noDataElement);
        return;
    }
    
    // الحلقة الفائزة هي أعلى حلقة في الترتيب
    const winner = evaluatedCircles[0];
    const winnerCircle = circlesProgressData[winner.index];
      // عرض معلومات الحلقة الفائزة
    const winnerElement = document.createElement('div');
    winnerElement.className = 'winner-details';
    winnerElement.innerHTML = `
        <h3 class="winner-name">${winner.teacher}</h3>
        <div class="winner-score">النتيجة الإجمالية: ${winner.totalScore.toFixed(1)} نقطة</div>
        <div class="winner-stats">
            <div class="winner-stat">
                <div class="stat-icon"><i class="fas fa-chart-bar"></i></div>
                <div class="stat-info">
                    <span class="stat-label">نسبة الإنجاز</span>
                    <span class="stat-value">${winner.progress.toFixed(1)}%</span>
                </div>
            </div>
            <div class="winner-stat">
                <div class="stat-icon"><i class="fas fa-star"></i></div>
                <div class="stat-info">
                    <span class="stat-label">النقاط</span>
                    <span class="stat-value">${winner.points.toFixed(1)}</span>
                </div>
            </div>
            <div class="winner-stat">
                <div class="stat-icon"><i class="fas fa-exclamation-circle"></i></div>
                <div class="stat-info">
                    <span class="stat-label">متوسط الأخطاء</span>
                    <span class="stat-value">${winner.errors.toFixed(1)}</span>
                </div>
            </div>
            <div class="winner-stat">
                <div class="stat-icon"><i class="fas fa-users"></i></div>
                <div class="stat-info">
                    <span class="stat-label">نسبة الحضور</span>
                    <span class="stat-value">${(winner.presentRatio * 100).toFixed(1)}%</span>
                </div>
            </div>
            ${!winner.hasErrorsData ? '<div class="circle-warning"><i class="fas fa-exclamation-triangle"></i> لم يتم إدخال الأخطاء للطلاب في هذه الحلقة</div>' : ''}
        `;
    
    winnerContainer.appendChild(winnerElement);
    
    // عرض معايير التقييم
    const criteriaList = document.getElementById('winner-criteria');
    criteriaList.innerHTML = '';
    
    // إضافة وصف لكل معيار مع قيمته ووزنه
    winner.criteriaScores.forEach(criterion => {
        const listItem = document.createElement('li');
        const percentage = (criterion.weight * 100).toFixed(0);
        const score = criterion.score.toFixed(1);
        const weightedScore = criterion.weightedScore.toFixed(1);
        
        listItem.innerHTML = `
            <span class="criterion-name">${criterion.name} (${percentage}%)</span>:
            <span class="criterion-score">${score}</span>
            <span class="criterion-weight">= ${weightedScore} نقطة</span>
        `;
        
        criteriaList.appendChild(listItem);
    });
}

// تحديث عرض الحلقات الأفضل والحلقة الفائزة
function updateTopCirclesAndWinner() {
    displayTopCircles();
    displayWinnerCircle();
    
    // جميع الطلاب المتفوقين أصبحوا داخل الحلقة الفائزة
}

// تقييم حلقة وفق المعايير الموحدة للحصول على النتيجة الإجمالية
function evaluateCircleByUnifiedCriteria(circleData) {
    // استخدام نفس معايير التقييم المستخدمة في evaluateAndRankCircles
    const criteria = [
        // نسبة الإنجاز (الوزن: 50%)
        {
            name: "نسبة الإنجاز",
            weight: 0.50,
            evaluate: (circle) => circle.progress
        },
        // معدل الأخطاء (معكوس) (الوزن: 30%)
        {
            name: "قلة الأخطاء",
            weight: 0.30,
            evaluate: (circle) => {
                // تحقق من وجود بيانات أخطاء
                if (!circle.hasErrorsData) return 0;
                
                const errorRate = circle.errors;
                // معكوس معدل الأخطاء: كلما قل عدد الأخطاء، زادت النقاط
                return errorRate === 0 ? 100 : 100 / (1 + errorRate);
            }
        },
        // نسبة الحضور (الوزن: 20%)
        {
            name: "نسبة الحضور",
            weight: 0.20,
            evaluate: (circle) => {
                if (circle.students.length === 0) return 0;
                const presentCount = circle.students.filter(s => s.isPresent).length;
                return (presentCount / circle.students.length) * 100;
            }
        }
    ];
    
    // حساب النقاط الإجمالية للحلقة
    let totalScore = 0;
    const criteriaScores = [];
    
    for (const criterion of criteria) {
        const score = criterion.evaluate(circleData);
        const weightedScore = score * criterion.weight;
        totalScore += weightedScore;
        
        criteriaScores.push({
            name: criterion.name,
            score,
            weightedScore,
            weight: criterion.weight
        });
    }
    
    return {
        ...circleData,
        totalScore,
        criteriaScores
    };
}
