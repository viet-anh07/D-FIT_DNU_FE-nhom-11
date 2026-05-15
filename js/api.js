var API_BASE_URL = "https://69fc37acfce564e259177ac8.mockapi.io/api/v1/Foods";
var USERS_BASE_URL = "https://6a05833daa826ca75c09fed3.mockapi.io/users";


var ENDPOINTS = {
  accounts: USERS_BASE_URL,
  users: USERS_BASE_URL,
  courses: API_BASE_URL + "/courses",
  schedules: API_BASE_URL + "/schedules",
};

function handleResponse(response, errorMessage) {
  if (!response.ok) {
    throw new Error(errorMessage || "Yeu cau that bai");
  }
  return response.json();
}

function getAccounts() {
  return fetch(ENDPOINTS.users)
    .then(function (response) {
      return handleResponse(response, "Khong the lay danh sach tai khoan");
    })
    .catch(function (error) {
      throw error;
    });
}

function getCourses() {
  return fetch(ENDPOINTS.courses)
    .then(function (response) {
      return handleResponse(response, "Khong the lay danh sach mon hoc");
    })
    .catch(function (error) {
      throw error;
    });
}

function getCourseById(id) {
  return fetch(ENDPOINTS.courses + "/" + id)
    .then(function (response) {
      return handleResponse(response, "Khong the lay mon hoc");
    })
    .catch(function (error) {
      throw error;
    });
}

function createCourse(data) {
  return fetch(ENDPOINTS.courses, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      return handleResponse(response, "Khong the them mon hoc");
    })
    .catch(function (error) {
      throw error;
    });
}

function updateCourse(id, data) {
  return fetch(ENDPOINTS.courses + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      return handleResponse(response, "Khong the cap nhat mon hoc");
    })
    .catch(function (error) {
      throw error;
    });
}

function deleteCourse(id) {
  return fetch(ENDPOINTS.courses + "/" + id, {
    method: "DELETE",
  })
    .then(function (response) {
      return handleResponse(response, "Khong the xoa mon hoc");
    })
    .catch(function (error) {
      throw error;
    });
}

function createAccount(data) {
  return fetch(ENDPOINTS.users, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      return handleResponse(response, "Khong the them tai khoan");
    })
    .catch(function (error) {
      throw error;
    });
}

function updateAccount(id, data) {
  return fetch(ENDPOINTS.users + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      return handleResponse(response, "Khong the cap nhat tai khoan");
    })
    .catch(function (error) {
      throw error;
    });
}

function deleteAccount(id) {
  return fetch(ENDPOINTS.users + "/" + id, {
    method: "DELETE",
  })
    .then(function (response) {
      return handleResponse(response, "Khong the xoa tai khoan");
    })
    .catch(function (error) {
      throw error;
    });
}
