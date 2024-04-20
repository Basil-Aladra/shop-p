function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // تحقق من أن اسم المستخدم وكلمة المرور معينة
    if (username === "user" && password === "pass") {
        // توجيه المستخدم إلى الصفحة الرئيسية بعد نجاح تسجيل الدخول
        window.location.href = "index.html";
    } else {
        document.getElementById("loginMessage").innerHTML = "فشل تسجيل الدخول. الرجاء التحقق من اسم المستخدم وكلمة المرور.";
    }
}