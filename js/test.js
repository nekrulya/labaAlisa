const questions = {
  "Задание 1": {
    question: " Какое из этих животных является самым быстрым на земле?",
    answers: ["Гепард", "Слон", "Крокодил", "Пингвин"],
    rightAnwser: "Гепард",
  },
  "Задание 2": {
    question: "Какое животное обладает самым длинным языком на планете?",
    answers: ["Жираф", "Ленивец", "Охотничья собака", "Голубь"],
    rightAnwser: "Жираф",
  },
  "Задание 3": {
    question: "В каком месте обитает большинство популяции панды?",
    answers: ["Южная Америка", "Австралия", "Африка", "Китай"],
    rightAnwser: "Китай",
  },
  "Задание 4": {
    question: "Какое животное служит символом мудрости во многих культурах?",
    answers: ["Сова", "Лисица", "Обезьяна", "Жираф"],
    rightAnwser: "Сова",
  },
};

const choosedAnswers = {};
const checkAnwsers = (choosedAnswers, questions) => {
  let counter = 0;
  for (taskNum of Object.keys(questions)) {
    if (
      questions[taskNum].rightAnwser ===
      choosedAnswers[questions[taskNum].question]
    ) {
      counter++;
    }
  }
  const cont = document.querySelector(".tasks");
  cont.innerHTML = `<p class="rigthAnswersOutput">Правильных ответов: ${counter}</p><div class="acceptResult" onclick="location.reload(); return false;">Принять результат</div></div>`;
};

const tasks = document.querySelectorAll(".task");
const modal = document.querySelector(".myModal");
modal.addEventListener("click", function (e) {
  modal.classList.remove("active");
});
modal
  .querySelector(".myModalContent")
  .addEventListener("click", (e) => e.stopPropagation());

for (let task of tasks) {
  task.addEventListener("click", function (e) {
    modal.classList.add("active");
    const currentTask = questions[e.target.textContent];
    modal.querySelector(".question").textContent = currentTask.question;
    modal.querySelector(".answers").innerHTML = "";
    for (let answer of currentTask.answers) {
      const li = document.createElement("li");
      const lbl = document.createElement("label");
      const inp = document.createElement("input");
      inp.type = "radio";
      inp.name = currentTask.question;
      inp.value = answer;
      inp.addEventListener("change", (e) => {
        choosedAnswers[currentTask.question] = answer;
        console.log(choosedAnswers);
        if (Object.keys(choosedAnswers).length === 4) {
          checkAnwsers(choosedAnswers, questions);
        }
      });
      lbl.append(inp);
      lbl.append(answer);
      li.append(lbl);
      modal.querySelector(".answers").append(li);
    }
  });
}
