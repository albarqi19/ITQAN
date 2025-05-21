function evaluateAndRankStudents() {
    // تقييم الطلاب داخل كل حلقة
    const rankedCirclesWithStudents = [];
    
    circlesProgressData.forEach((circle, circleIndex) => {
        // تقييم كل طالب في الحلقة
        const evaluatedStudents = circle.students
            .map((student, studentIndex) => {
                // حساب نسبة الإنجاز للطالب
                const requiredPages = pathsData[student.path] || 0;
                const completedPages = parseInt(student.completedPages) || 0;
                const progress = requiredPages === 0 ? 0 : (completedPages / requiredPages) * 100;
                
                // حساب النقاط
                const pointsPerPage = calculatePointsPerPage(student.path);
                const errors = parseInt(student.errors) || 0;
                const errorDeduction = errors * 0.1;
                const points = Math.max(0, (completedPages * pointsPerPage) - errorDeduction);
                
                // حساب معدل الأخطاء
                const errorRate = completedPages === 0 ? 0 : errors / completedPages;
                  // حساب الدرجة الكلية (50% للإنجاز و 50% لقلة الأخطاء)
                const totalScore = (
                    (progress * 0.5) +  // نسبة الإنجاز (50%)
                    (errorRate === 0 ? 100 : 100 / (1 + errorRate)) * 0.5 // قلة الأخطاء (50%)
                );
                
                return {
                    index: studentIndex,
                    name: student.name,
                    path: student.path,
                    progress,
                    points,
                    errors,
                    isPresent: student.isPresent,
                    totalScore,
                    circleIndex // إضافة مؤشر الحلقة للمرجعية
                };
            })
            .filter(student => student.isPresent) // تصفية الطلاب الحاضرين فقط
            .sort((a, b) => b.totalScore - a.totalScore); // ترتيب تنازلي حسب الدرجة الكلية
        
        // أخذ أفضل 3 طلاب فقط (أو أقل إذا كان عدد الطلاب أقل من 3)
        const topStudents = evaluatedStudents.slice(0, 3);
        
        rankedCirclesWithStudents.push({
            circleIndex,
            teacher: circle.teacher,
            topStudents
        });
    });
    
    return rankedCirclesWithStudents;
}

// عرض أفضل الطلاب في كل حلقة
function displayTopStudents() {
    const rankedCirclesWithStudents = evaluateAndRankStudents();
    const topStudentsContainer = document.getElementById('top-students-container');
    
    // التأكد من وجود العنصر في الصفحة
    if (!topStudentsContainer) return;
    
    // مسح المحتوى السابق
    topStudentsContainer.innerHTML = '';
    
    // التحقق من وجود بيانات
    if (!rankedCirclesWithStudents || rankedCirclesWithStudents.length === 0) {
        const noDataElement = document.createElement('div');
        noDataElement.className = 'no-data-message';
        noDataElement.textContent = 'لا توجد بيانات متاحة حاليًا';
        topStudentsContainer.appendChild(noDataElement);
        return;
    }
    
    // إنشاء عنصر لكل حلقة تعرض أفضل 3 طلاب
    rankedCirclesWithStudents.forEach(({ teacher, topStudents }) => {
        if (topStudents.length === 0) return; // تخطي الحلقات بدون طلاب
        
        // إنشاء حاوية للحلقة
        const circleElement = document.createElement('div');
        circleElement.className = 'top-students-circle';
        
        // إنشاء عنوان الحلقة
        const circleTitle = document.createElement('h3');
        circleTitle.className = 'top-students-circle-title';
        circleTitle.textContent = teacher;
        circleElement.appendChild(circleTitle);
        
        // إنشاء حاوية للطلاب
        const studentsContainer = document.createElement('div');
        studentsContainer.className = 'top-students-list';
        
        // إضافة كل طالب متفوق
        topStudents.forEach((student, index) => {
            const studentElement = document.createElement('div');
            studentElement.className = `top-student rank-${index + 1}`;
            
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
                        <span class="stat-label">النقاط:</span>
                        <span class="stat-value">${student.points.toFixed(1)}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">الأخطاء:</span>
                        <span class="stat-value">${student.errors}</span>
                    </div>
                </div>
            `;
            
            studentsContainer.appendChild(studentElement);
        });
        
        circleElement.appendChild(studentsContainer);
        topStudentsContainer.appendChild(circleElement);
    });
}
