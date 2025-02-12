function calculate() {
    const age = document.getElementById("age").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const heightUnit = document.getElementById("heightUnit").value;
    const weightUnit = document.getElementById("weightUnit").value;

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight values.");
        return;
    }

    let heightInMeters = height;
    if (heightUnit === "inches") {
        heightInMeters = height * 0.0254;
    } else if (heightUnit === "cm") {
        heightInMeters = height / 100;
    }

    let weightInKg = weight;
    if (weightUnit === "lbs") {
        weightInKg = weight * 0.453592;
    }

    const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);

    let category = '';
    let tips = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        tips = `
            <strong>Tips for you:</strong><br>
            <ul>
                <li><strong>Eat more frequently:</strong> Eat 5–6 smaller meals throughout the day, and try to plan times to eat even if you aren't hungry.</li>
                <li><strong>Choose nutritious foods:</strong> Eat foods that are high in your calories, protein, vitamins, and minerals. You can add extras to your dishes like cheese, nut butter, or dry milk.</li>
                <li><strong>Exercise:</strong> Exercise, especially strength training, can help you build abs and muscles and increase your appetite.</li>
                <li><strong>Avoid junk food:</strong> Avoid foods with a lot of added sugar, fat, and salt, like cakes, takeaway foods, and sugary drinks.</li>
                <li><strong>Drink enough water:</strong> Drink at least 6–8 glasses of water every day to hydrate your skin and help your body flush out junk.</li>
                <li><strong>Talk to a doctor:</strong> A doctor or nurse can help you create a healthy eating plan and determine how quickly you should gain weight.</li>
            </ul>
        `;
        highlightBMICategory(0);
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal';
        tips = '';
        highlightBMICategory(1);
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
        tips = `
            <strong>Tips for you:</strong><br>
            <ul>
                <li><strong>Creating a treatment plan:</strong> A healthcare provider can work with you to create a treatment plan that includes lifestyle changes, diet, and physical activity.</li>
                <li><strong>Reducing calories:</strong> You can reduce your daily calorie intake by 500 calories to lose weight.</li>
                <li><strong>Eating healthy:</strong> Eat more plant-based foods, lean proteins, and heart-healthy fats. Limit added sugar and salt.</li>
                <li><strong>Exercising:</strong> Get at least 150 minutes of moderate-intensity aerobic activity each week. You can try walking, cycling, or using a seated stationary bike.</li>
                <li><strong>Monitoring:</strong> Track your food intake, physical activity, and weight.</li>
                <li><strong>Getting enough sleep:</strong> Sleep apnea can disrupt your sleep and alter your hunger hormones.</li>
            </ul>
        `;
        highlightBMICategory(2);
    } else {
        category = 'Obese';
        tips = `
            <strong>Tips for you:</strong><br>
            <ul>
                <li><strong>Consult a Doctor:</strong> A doctor or nurse can help you create a treatment plan that may include lifestyle changes, dietary counseling, or medication.</li>
                <li><strong>Diet:</strong> Eat a healthy, balanced diet that includes fruits, vegetables, whole grains, low-fat dairy, and lean meats. Limit or avoid high-calorie, low-nutrient foods.</li>
                <li><strong>Exercise:</strong> Increase your activity level, even if it's just a 10-minute walk a day. Start gradually if you're not used to exercising.</li>
                <li><strong>Sleep:</strong> Get checked for sleep apnea, which can disrupt your sleep and alter hunger hormones.</li>
                <li><strong>Treatment plan:</strong> A healthcare provider can help develop a treatment plan that may include dietary counseling, behavioral weight-loss programs, medicines, or surgery.</li>
                <li><strong>Energy balance:</strong> Maintain energy balance by ensuring the energy from food equals the energy your body uses.</li>
            </ul>
        `;
        highlightBMICategory(3);
    }

    document.getElementById("result").innerText = bmi;
    document.getElementById("categoryLabel").style.display = "block";
    document.getElementById("category").innerText = category;
    document.getElementById("category").style.display = "block";
    document.getElementById("tipsLabel").style.display = "block";
    document.getElementById("tips").innerHTML = tips;
    document.getElementById("tips").style.display = "block";
}


function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById("themeToggle");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        themeToggle.innerText = "Light Mode";
        themeToggle.classList.add("dark-mode");
        body.style.backgroundImage = "url('background2.png')"; 
    } else {
        themeToggle.innerText = "Dark Mode";
        themeToggle.classList.remove("dark-mode");
        body.style.backgroundImage = "url('background.jpg')";
    }

    const containers = document.querySelectorAll(".container1, .box, .category-box, h1, a");
    containers.forEach(element => element.classList.toggle("dark-mode"));
}

function highlightBMICategory(index) {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar, i) => {
        if (i === index) {
            bar.classList.add('active', 'text-white');
            bar.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
        } else {
            bar.classList.remove('active', 'text-white');
        }
    });
}

  
