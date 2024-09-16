const Data = [
  {
    id: "1",
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: "2",
    question: "What is the capital of India?",
    answer: "Delhi",
  },
  {
    id: "3",
    question: "What is the capital of Swiss?",
    answer: "Zurich",
  },
  {
    id: "4",
    question: "What is the capital of America?",
    answer: "Washington, D.C.",
  },
];

const accordianWrapper = document.querySelector(".accordian");

function createAccordianData() {
  const frag = document.createDocumentFragment();
  Data.forEach((dataItem) => {
    const item = document.createElement("div");
    item.classList.add("accordian-item");
    const title = document.createElement("div");
    title.classList.add("accordian-title");
    title.innerHTML = `<h3>${dataItem.question}</h3>
      <i class="fa-solid fa-arrow-up"></i>`;
    const content = document.createElement("div");
    content.classList.add("accordian-content");
    content.innerHTML = `<p>${dataItem.answer}</p>`;
    item.appendChild(title);
    item.appendChild(content);
    frag.appendChild(item);
  });
  accordianWrapper.appendChild(frag);
}
createAccordianData();

document.querySelectorAll(".accordian-title").forEach((title) => {
  title.addEventListener("click", ({ currentTarget }) =>
    currentTarget.classList.toggle("active")
  );
});
