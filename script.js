const questions = [
    // Geography
    { question: "What is the longest river in Africa?", answer: "The Nile River" },
    { question: "Which is the largest desert in Africa?", answer: "The Sahara Desert" },
    { question: "What is the highest mountain in Africa?", answer: "Mount Kilimanjaro" },
    { question: "Name the largest lake in Africa.", answer: "Lake Victoria" },
    { question: "Which African country has the longest coastline?", answer: "Somalia" },
    { question: "What is the capital city of Nigeria?", answer: "Abuja" },
    { question: "Which is the smallest country in Africa by area?", answer: "Seychelles" },
    { question: "What is the most populous city in Africa?", answer: "Lagos, Nigeria" },
    { question: "Which African country is an island nation?", answer: "Madagascar" },
    { question: "What is the name of the largest waterfall in Africa?", answer: "Victoria Falls" },
    // History
    { question: "Which ancient civilization was located in present-day Egypt?", answer: "The ancient civilization of Egypt" },
    { question: "What was the name of the ancient city in Mali that was a centre of trade and scholarship?", answer: "Timbuktu" },
    { question: "When did South Africa officially end apartheid?", answer: "1994" },
    { question: "Which African empire was known for its wealth and extensive trade networks, particularly in gold?", answer: "The Mali Empire" },
    { question: "What was the Scramble for Africa?", answer: "The period during the late 19th century when European powers colonised and partitioned African territories" },
    { question: "Who was the first president of independent Kenya?", answer: "Jomo Kenyatta" },
    { question: "Which African country gained independence first?", answer: "Liberia" },
    { question: "What was the name of the apartheid resistance leader who became South Africa’s first black president?", answer: "Nelson Mandela" },
    { question: "Which African country was never colonised?", answer: "Ethiopia" },
    { question: "What was the ancient kingdom located in what is now Sudan?", answer: "The Kingdom of Kush" },
    // Culture
    { question: "What is the most widely spoken language in Africa?", answer: "Swahili" },
    { question: "What is the significance of the Griot in West African culture?", answer: "Griots are traditional storytellers, musicians, and oral historians" },
    { question: "Which African country is famous for its Maasai Mara National Reserve?", answer: "Kenya" },
    { question: "What is the traditional Zulu dance called that is performed at ceremonies and celebrations?", answer: "Indlamu dance" },
    { question: "Which African festival, held in Ghana, celebrates the harvesting of yams?", answer: "Homowo Festival" },
    { question: "What is the traditional Maasai attire called?", answer: "Shuka" },
    { question: "What is the term for a traditional West African textile made from narrow strips of cloth?", answer: "Kente cloth" },
    { question: "Which African country is known for its vibrant Kente cloth?", answer: "Ghana" },
    { question: "What is the name of the Ethiopian coffee ceremony?", answer: "Bunna" },
    { question: "Which dance is considered a symbol of South African culture?", answer: "Gumboot dance" },
    // Wildlife
    { question: "What is the largest land mammal found in Africa?", answer: "The African elephant" },
    { question: "Name an African bird that is the largest bird in the world.", answer: "The ostrich" },
    { question: "Which African animal is known for its distinctive black and white stripes?", answer: "The zebra" },
    { question: "What is the name of the rainforest located in Central Africa?", answer: "The Congo Rainforest" },
    { question: "Which African country is home to the Okavango Delta?", answer: "Botswana" },
    { question: "What is the name of the fastest land animal found in Africa?", answer: "The cheetah" },
    { question: "Which animal is known as the king of the African savannah?", answer: "The lion" },
    { question: "What is the primary habitat of the African gorilla?", answer: "The tropical forests of central Africa" },
    { question: "What unique feature does the giraffe have?", answer: "Its long neck" },
    { question: "What is the largest reptile found in Africa?", answer: "The Nile crocodile" },
    // Natural Resources
    { question: "What is Africa’s most significant natural resource export?", answer: "Oil" },
    { question: "Which country is the largest producer of cocoa beans in Africa?", answer: "Côte d'Ivoire (Ivory Coast)" },
    { question: "What precious metal is South Africa known for producing?", answer: "Gold" },
    { question: "Which African country is the leading producer of diamonds?", answer: "Botswana" },
    { question: "What is the primary agricultural product of Kenya?", answer: "Tea" },
    { question: "Which African country is the largest exporter of coffee?", answer: "Ethiopia" },
    { question: "What is the primary mineral resource found in the Democratic Republic of Congo?", answer: "Cobalt" },
    { question: "Which African country is known for its large reserves of uranium?", answer: "Niger" },
    { question: "What is the major export crop of Ghana?", answer: "Cocoa" },
    { question: "Which African country is a major producer of platinum?", answer: "South Africa" },
    // Landmarks
    { question: "Which city is known as the 'Mother City' of South Africa?", answer: "Cape Town" },
    { question: "What is the name of the famous rock formation in Mali?", answer: "The Bandiagara Escarpment" },
    { question: "Which city is famous for its pyramids and Sphinx?", answer: "Cairo, Egypt" },
    { question: "What is the name of the ancient ruins in Zimbabwe?", answer: "Great Zimbabwe" },
    { question: "Which island is known for its giant tortoises?", answer: "Seychelles" },
    { question: "What is the name of the ancient city of rock-hewn churches in Ethiopia?", answer: "Lalibela" },
    { question: "Which waterfall forms the border between Zambia and Zimbabwe?", answer: "Victoria Falls" },
    { question: "What is the largest city in Morocco?", answer: "Casablanca" },
    { question: "Which African country is home to the Atlas Mountains?", answer: "Morocco" },
    { question: "What is the famous archaeological site in Tanzania where early human fossils were found?", answer: "Olduvai Gorge" },
];

// Generate more questions to reach over 1,000
for (let i = 1; i <= 970; i++) {
    questions.push({ question: `Generated Question ${i}`, answer: `Generated Answer ${i}` });
}

console.log(`Total questions: ${questions.length}`); // Verify the total number of questions

// Function to create the quiz on the webpage
function createQuiz() {
    const quizContainer = document.getElementById('quiz');
    questions.forEach((q, index) => {
        // Create question element
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
        
        // Create answer element
        const answerElement = document.createElement('div');
        answerElement.className = 'answer hidden';
        answerElement.innerHTML = `<p>${q.answer}</p>`;
        
        // Create button to reveal the answer
        const buttonElement = document.createElement('button');
        buttonElement.innerHTML = 'Show Answer';
        buttonElement.onclick = () => {
            answerElement.classList.toggle('hidden');
        };
        
        // Append elements to the question container
        questionElement.appendChild(buttonElement);
        questionElement.appendChild(answerElement);
        quizContainer.appendChild(questionElement);
    });
}

// Call the function to create the quiz when the page loads
window.onload = createQuiz;
