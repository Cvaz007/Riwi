const formCategories = document.getElementById("form_categories");
const formNotices = document.getElementById("form_notices");
const selectCategory = document.getElementById("idCategory");
const tableCategories = document.getElementById("categorias-tbody");
const tableNotices = document.getElementById("notices-tbody");

const URLBase = "http://localhost:3000/";

document.addEventListener("DOMContentLoaded", () => {
  loadingSelectCategories();
  getAllCategories();
  getAllNews();
});

formCategories.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formCategories);
  const category = {};
  for (const [key, value] of formData) {
    if (!value) return alert("You need complete all inputs!");
    category[key] = value;
  }

  const dataId = event.target.getAttribute("data-id");
  console.log(dataId);
  // if (!dataId) {
  //   createCategory(category);
  // } else {
  //   editCategory(dataId);
  // }
});

formNotices.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formNotices);
  const notice = {};
  for (const [key, value] of formData) {
    if (!value) return alert("You need complete all inputs!");
    notice[key] = value;
  }
  createNew(notice);
});

const getAllNews = async () => {
  const response = await fetch(`${URLBase}news?_embed=category&_embed=user`);
  const data = await response.json();

  data.forEach((notice) => {
    tableNotices.innerHTML += `
    <tr>
      <td>
        <img
          src="${notice.image}"
          alt="photo"
          height="50"
          width="50"
          class="rounded-circle"
        />
      </td>
      <td>${notice.title}</td>
      <td>${notice.content}</td>
      <td>${notice.publicationDate}</td>
      <td>${notice.user.name}</td>
      <td>${notice.category.name}</td>
      <td>
        <button class="btn btn-primary editNew" data-bs-toggle="modal"
        data-bs-target="#modal-notice" data-id="${notice.id}">Edit</button>
        <button class="btn btn-danger deleteNew" onclick="deleteNew('${notice.id}')">Delete</button>
      </td>
    </tr>
    `;
  });
};

const getAllCategories = async () => {
  const response = await fetch(`${URLBase}categories`);
  const data = await response.json();

  data.forEach((category, index) => {
    tableCategories.innerHTML += `
    <tr>
      <td>${index + 1}</td>
      <td>${category.name}</td>
      <td>${category.description}</td>
      <td>
        <button class="btn btn-primary editCategory" data-bs-toggle="modal"
        data-bs-target="#modal-category" data-id="${category.id}">Edit</button>
        <button class="btn btn-danger deleteCategory" onclick="deleteCategory('${
          category.id
        }')">Delete</button>
      </td>
    </tr>
    `;
  });
};

const loadingSelectCategories = async () => {
  const response = await fetch(`${URLBase}categories`);
  const data = await response.json();

  data.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    selectCategory.appendChild(option);
  });
};

const getCurrentDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return day + "-" + month + "-" + year;
};

const getIdUser = () => {
  const user = JSON.parse(localStorage.getItem("userCache"));
  return user.id;
};

const createCategory = async (category) => {
  await fetch(`${URLBase}categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: category.name,
      description: category.description,
    }),
  });
};

const createNew = async (notice) => {
  await fetch(`${URLBase}news`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: notice.image,
      title: notice.title,
      publicationDate: notice.publicationDate,
      content: notice.content,
      userId: notice.userId,
      categoryId: notice.categoryId,
      publicationDate: getCurrentDate(),
      userId: getIdUser(),
    }),
  });
};

const deleteNew = async (id) => {
  await fetch(`${URLBase}news/${id}`, {
    method: "DELETE",
  });
};

const deleteCategory = async (idCategory) => {
  const response = await fetch(`${URLBase}news?categoryId=${idCategory}`);
  const data = await response.json();
  data.forEach(async (notice) => {
    await fetch(`${URLBase}news/${notice.id}`, {
      method: "DELETE",
    });
  });

  await fetch(`${URLBase}categories/${idCategory}`, {
    method: "DELETE",
  });
};

//Preguntar como sacar el modal lleno
const editNew = async (id) => {};

const editCategory = async (id) => {
  console.log("Editar categoria");
};
