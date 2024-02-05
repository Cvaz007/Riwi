const formCategories = document.getElementById("form_categories");
const formNotices = document.getElementById("form_notices");
const selectCategory = document.getElementById("idCategory");
const tableCategories = document.getElementById("categorias-tbody");
const tableNotices = document.getElementById("notices-tbody");
let categoryId, newId;

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

  if (!categoryId) {
    createCategory(category);
  } else {
    updateCategory(category);
    categoryId = undefined;
  }
});

formNotices.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formNotices);
  const notice = {};
  for (const [key, value] of formData) {
    if (!value) return alert("You need complete all inputs!");
    notice[key] = value;
  }
  if (!newId) {
    createNew(notice);
  } else {
    updateNew(notice);
    newId = undefined;
  }
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
        <button class="btn btn-primary edit_new" data-bs-toggle="modal"
        data-bs-target="#modal-notice" onclick="editNew('${notice.id}')">Edit</button>
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
        <button class="btn btn-primary edit_category" data-bs-toggle="modal"
        data-bs-target="#modal-category" onclick="editCategory('${
          category.id
        }')">Edit</button>
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

const getCategoryById = async (id) => {
  const response = await fetch(`${URLBase}categories/${id}`);
  const data = await response.json();

  return data;
};

const getNoticeById = async (id) => {
  const response = await fetch(`${URLBase}news/${id}`);
  const data = await response.json();

  return data;
}

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

const updateCategory = async (category) => {
  await fetch(`${URLBase}categories/${categoryId}`, {
    method: "PATCH",
    body: JSON.stringify(category),
  });
};

const updateNew = async (notice) => {
  await fetch(`${URLBase}news/${newId}`, {
    method: "PATCH",
    body: JSON.stringify(notice),
  });
}

const editNew = async (id) => {
  newId = id;
  const notice = await getNoticeById(id);
  renderModalNew(notice);
};

const editCategory = async (id) => {
  categoryId = id;
  const category = await getCategoryById(id);
  renderModalCategory(category);
};

const renderModalCategory = (category) => {
  const textArea = document.getElementById("descriptionCategory");
  const nameCategory = document.getElementById("nameCategory");
  nameCategory.value = category.name;
  textArea.value = category.description;
};

const renderModalNew = (notice) => {
  const nameNotice = document.getElementById("nameNotice");
  const urlImage = document.getElementById("urlImage");
  const idCategory = document.getElementById("idCategory");
  const contentNotice = document.getElementById("contentNotice");
  nameNotice.value = notice.title;
  urlImage.value = notice.image;
  idCategory.value = notice.categoryId;
  contentNotice.value = notice.content;
};
