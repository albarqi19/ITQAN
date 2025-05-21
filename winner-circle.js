// عرض الحلقة الفائزة مع شرح معايير الاختيار وأفضل الطلاب
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
                    <span class="stat-label">النقاط المحصلة</span>
                    <span class="stat-value">${winner.points.toFixed(1)}</span>
                </div>
            </div>
            <div class="winner-stat">
                <div class="stat-icon"><i class="fas fa-exclamation-triangle"></i></div>
        <div class="stat-info">
                    <span class="stat-label">متوسط الأخطاء</span>
                    <span class="stat-value">${winner.errors.toFixed(1)}</span>
                </div>
            </div>
        </div>
        ${!winner.hasErrorsData ? '<div class="circle-warning circle-error"><i class="fas fa-exclamation-triangle"></i> لم يتم إدخال الأخطاء للطلاب في هذه الحلقة</div>' : ''}
    `;
    
    winnerCircleContainer.appendChild(winnerElement);
    
    // إضافة أفضل الطلاب في الحلقة الفائزة
    displayTopStudentsInWinnerCircle(winner.index, winnerCircleContainer);
      // عرض المعايير
    const criteriaTitle = document.createElement('h4');
    criteriaTitle.textContent = 'معايير تقييم الحلقات:';
    criteriaTitle.className = 'criteria-title';
    winnerCriteriaList.appendChild(criteriaTitle);
    
    // إنشاء قائمة بالمعايير وأوزانها ودرجاتها
    winner.criteriaScores.forEach(criterion => {
        const criterionItem = document.createElement('li');
        criterionItem.innerHTML = `
            <span class="criterion-name">${criterion.name}</span>
            <span class="criterion-details">
                <span class="criterion-score">${criterion.score.toFixed(1)} / 100</span>
                <span class="criterion-weight">(الوزن: ${(criterion.weight * 100).toFixed(0)}%)</span>
            </span>
        `;
        winnerCriteriaList.appendChild(criterionItem);
    });
    
    // إضافة معايير اختيار الطلاب المتفوقين
    const studentCriteriaTitle = document.createElement('h4');
    studentCriteriaTitle.textContent = 'معايير تقييم الطلاب المتفوقين:';
    studentCriteriaTitle.className = 'criteria-title student-criteria-title';
    winnerCriteriaList.appendChild(studentCriteriaTitle);
      // إنشاء قائمة معايير تقييم الطلاب
    const studentCriteriaItems = [
        { name: 'نسبة الإنجاز', weight: 0.5, description: 'عدد الصفحات المنجزة مقارنة بالعدد المطلوب' },
        { name: 'قلة الأخطاء', weight: 0.5, description: 'كلما قلت الأخطاء زادت النقاط' }
    ];
    
    studentCriteriaItems.forEach(criterion => {
        const criterionItem = document.createElement('li');
        criterionItem.innerHTML = `
            <span class="criterion-name">${criterion.name}</span>
            <span class="criterion-details">
                <span class="criterion-weight">(الوزن: ${(criterion.weight * 100).toFixed(0)}%)</span>
            </span>
            <div class="criterion-description">${criterion.description}</div>
        `;
        winnerCriteriaList.appendChild(criterionItem);
    });
    
    // إضافة ملاحظة توضيحية
    const noteElement = document.createElement('div');
    noteElement.className = 'winner-note';
    noteElement.innerHTML = `
        <p><strong>ملاحظة:</strong> تم تقييم الحلقات بناءً على ثلاثة معايير رئيسية وهي:</p>
        <ol>
            <li><strong>نسبة الإنجاز (50%):</strong> عدد الصفحات المنجزة مقارنة بالعدد المطلوب.</li>
            <li><strong>قلة الأخطاء (30%):</strong> كلما قلت الأخطاء زادت النقاط.</li>
            <li><strong>نسبة حضور الطلاب (20%):</strong> كلما زاد عدد الطلاب الحاضرين زادت النقاط.</li>
        </ol>
    `;
      winnerCircleContainer.appendChild(noteElement);
    
    // عرض أفضل الطلاب في جميع الحلقات
    displayAllTopStudents(winnerCriteriaList);
}

// عرض أفضل الطلاب داخل الحلقة الفائزة بشكل قابل للطي
function displayTopStudentsInWinnerCircle(circleIndex, container) {
    // الحصول على بيانات أفضل الطلاب
    const rankedCirclesWithStudents = evaluateAndRankStudents();
    
    // التحقق من وجود بيانات
    if (!rankedCirclesWithStudents || rankedCirclesWithStudents.length === 0) {
        return;
    }
      // البحث عن بيانات الحلقة المطلوبة
    const circleData = rankedCirclesWithStudents.find(circle => circle.circleIndex === circleIndex);
    if (!circleData || !circleData.topStudents || circleData.topStudents.length === 0) {
        return;
    }
      // إنشاء قسم الطلاب المتفوقين
    const topStudentsSection = document.createElement('div');
    topStudentsSection.className = 'winner-top-students';
    topStudentsSection.setAttribute('title', 'انقر لعرض أفضل الطلاب');
    
    // إنشاء عنوان قابل للطي
    const collapsibleHeader = document.createElement('div');
    collapsibleHeader.className = 'collapsible-header';
    collapsibleHeader.innerHTML = `
        <h4 class="top-students-title">أفضل الطلاب</h4>
        <span class="toggle-icon"><i class="fas fa-chevron-down"></i></span>
    `;
    
    // إنشاء المحتوى القابل للطي
    const collapsibleContent = document.createElement('div');
    collapsibleContent.className = 'collapsible-content';
    collapsibleContent.style.display = 'none'; // مخفي بشكل افتراضي
    
    // إضافة الطلاب المتفوقين
    const studentsContainer = document.createElement('div');
    studentsContainer.className = 'winner-students-list';
    
    circleData.topStudents.forEach((student, index) => {
        const studentElement = document.createElement('div');
        studentElement.className = `top-student rank-${index + 1}`;
        
        // إضافة رمز للترتيب
        const rankIcon = index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉';            studentElement.innerHTML = `
                <div class="student-rank">${rankIcon} المركز ${index + 1}</div>
                <div class="student-name">${student.name}</div>
                <div class="student-stats">
                    <div class="stat">
                        <span class="stat-label">المسار:</span>
                        <span class="stat-value">${student.path}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">نسبة الإنجاز:</span>
                        <span class="stat-value">${student.progress.toFixed(1)}%</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">الأخطاء:</span>
                        <span class="stat-value">${student.errors}</span>
                    </div>
                </div>
            `;
        
        studentsContainer.appendChild(studentElement);
    });
    
    collapsibleContent.appendChild(studentsContainer);
      // إضافة التفاعل لفتح وإغلاق القائمة
    collapsibleHeader.addEventListener('click', () => {
        // التحقق من الحالة الحالية
        const isVisible = collapsibleContent.style.display !== 'none';
        
        // تغيير حالة العرض
        if (isVisible) {
            collapsibleContent.style.display = 'none';
        } else {
            collapsibleContent.style.display = 'block';
        }
        
        // تحديث أيقونة التبديل
        const icon = collapsibleHeader.querySelector('.toggle-icon i');
        icon.className = isVisible ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
    });
      // إضافة الأقسام إلى الحاوية
    topStudentsSection.appendChild(collapsibleHeader);
    topStudentsSection.appendChild(collapsibleContent);
    container.appendChild(topStudentsSection);
}

// عرض أفضل الطلاب في جميع الحلقات
function displayAllTopStudents(container) {
    // الحصول على بيانات أفضل الطلاب
    const rankedCirclesWithStudents = evaluateAndRankStudents();
    
    // التحقق من وجود بيانات
    if (!rankedCirclesWithStudents || rankedCirclesWithStudents.length === 0) {
        return;
    }
    
    // إنشاء قسم للطلاب المتفوقين
    const topStudentsSection = document.createElement('div');
    topStudentsSection.className = 'all-top-students-section';
    topStudentsSection.innerHTML = '<h4 class="all-top-students-title">أفضل الطلاب في كل حلقة</h4>';
    
    // إضافة كل حلقة مع طلابها المتفوقين
    rankedCirclesWithStudents.forEach((circleData) => {
        if (!circleData.topStudents || circleData.topStudents.length === 0) {
            return; // تخطي الحلقات بدون طلاب
        }
        
        // إنشاء حلقة قابلة للطي
        const circleContainer = document.createElement('div');
        circleContainer.className = 'circle-container';
        
        // إنشاء عنوان الحلقة القابل للطي
        const circleHeader = document.createElement('div');
        circleHeader.className = 'circle-header-collapsible';
        circleHeader.innerHTML = `
            <span class="circle-name">${circleData.teacher}</span>
            <span class="toggle-icon"><i class="fas fa-chevron-down"></i></span>
        `;
        
        // إنشاء محتوى قابل للطي
        const circleContent = document.createElement('div');
        circleContent.className = 'circle-content-collapsible';
        circleContent.style.display = 'none'; // مخفي بشكل افتراضي
        
        // إضافة الطلاب المتفوقين
        const studentsContainer = document.createElement('div');
        studentsContainer.className = 'circle-top-students';
        
        circleData.topStudents.forEach((student, index) => {
            const studentElement = document.createElement('div');
            studentElement.className = `circle-top-student rank-${index + 1}`;
            
            // إضافة رمز للترتيب
            const rankIcon = index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉';
            
            studentElement.innerHTML = `
                <div class="student-rank">${rankIcon} المركز ${index + 1}</div>
                <div class="student-name">${student.name}</div>
                <div class="student-stats">
                    <div class="stat">
                        <span class="stat-label">المسار:</span>
                        <span class="stat-value">${student.path}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">نسبة الإنجاز:</span>
                        <span class="stat-value">${student.progress.toFixed(1)}%</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">الأخطاء:</span>
                        <span class="stat-value">${student.errors}</span>
                    </div>
                </div>
            `;
            
            studentsContainer.appendChild(studentElement);
        });
        
        circleContent.appendChild(studentsContainer);
        
        // إضافة التفاعل لفتح وإغلاق القائمة
        circleHeader.addEventListener('click', () => {
            // التحقق من الحالة الحالية
            const isVisible = circleContent.style.display !== 'none';
            
            // تغيير حالة العرض
            if (isVisible) {
                circleContent.style.display = 'none';
                circleHeader.querySelector('.toggle-icon i').className = 'fas fa-chevron-down';
            } else {
                circleContent.style.display = 'block';
                circleHeader.querySelector('.toggle-icon i').className = 'fas fa-chevron-up';
            }
        });
        
        // إضافة المكونات إلى الحاوية
        circleContainer.appendChild(circleHeader);
        circleContainer.appendChild(circleContent);
        topStudentsSection.appendChild(circleContainer);
    });
    
    container.appendChild(topStudentsSection);
}
