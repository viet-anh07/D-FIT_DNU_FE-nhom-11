const defaultFoods = [
  { id: 'rice', name: 'Cơm trắng', group: 'Tinh bột', calories: 130, protein: 2.4, carbs: 28, fat: 0.2 },
  { id: 'egg', name: 'Trứng gà', group: 'Protein', calories: 155, protein: 13, carbs: 1.1, fat: 11 },
  { id: 'chicken', name: 'Ức gà', group: 'Protein', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  { id: 'banana', name: 'Chuối', group: 'Trái cây', calories: 89, protein: 1.1, carbs: 23, fat: 0.3 },
  { id: 'avocado', name: 'Bơ', group: 'Chất béo', calories: 160, protein: 2, carbs: 9, fat: 15 },
  { id: 'broccoli', name: 'Bông cải xanh', group: 'Rau củ', calories: 34, protein: 2.8, carbs: 6.6, fat: 0.4 },
  { id: 'bread', name: 'Bánh mì', group: 'Tinh bột', calories: 265, protein: 9, carbs: 49, fat: 3.2 },
  { id: 'coffee', name: 'Cà phê đen', group: 'Đồ uống', calories: 2, protein: 0.3, carbs: 0, fat: 0 },
  { id: 'salmon', name: 'Cá hồi', group: 'Protein', calories: 208, protein: 20, carbs: 0, fat: 13 },
  { id: 'tofu', name: 'Đậu hũ', group: 'Protein', calories: 76, protein: 8, carbs: 1.9, fat: 4.8 },
  { id: 'sweet_potato', name: 'Khoai lang', group: 'Tinh bột', calories: 86, protein: 1.6, carbs: 20, fat: 0.1 },
  { id: 'mango', name: 'Xoài', group: 'Trái cây', calories: 60, protein: 0.8, carbs: 15, fat: 0.4 },
  { id: 'almond', name: 'Hạnh nhân', group: 'Chất béo', calories: 579, protein: 21, carbs: 22, fat: 50 },
];

const STORAGE_FOODS = 'nutricheckFoods';
const STORAGE_LOG = 'nutricheckLogsByDate';
const STORAGE_PROFILE = 'nutricheckProfile';
const STORAGE_ACCOUNTS = 'nutricheckAccounts';
const STORAGE_ADMIN_AUTH = 'nutricheckAdminAuthenticated';
const STORAGE_USER_AUTH = 'nutricheckUserAuthenticated';
const STORAGE_CURRENT_USER = 'nutricheckCurrentUser';
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'nutri2026';
const DEFAULT_TARGET_CALORIES = 2000;

const elements = {
  searchInput: document.getElementById('searchInput'),
  groupFilter: document.getElementById('groupFilter'),
  foodList: document.getElementById('foodList'),
  logEntries: document.getElementById('logEntries'),
  totalsCard: document.getElementById('totalsCard'),
  adminFoodRows: document.getElementById('adminFoodRows'),
  adminLogView: document.getElementById('adminLogView'),
  foodForm: document.getElementById('foodForm'),
  foodName: document.getElementById('foodName'),
  foodGroup: document.getElementById('foodGroup'),
  foodCalories: document.getElementById('foodCalories'),
  foodProtein: document.getElementById('foodProtein'),
  foodCarbs: document.getElementById('foodCarbs'),
  foodFat: document.getElementById('foodFat'),
  resetForm: document.getElementById('resetForm'),
  tabs: document.querySelectorAll('.tab-button'),
  adminTab: document.getElementById('adminTab'),
  adminPanel: document.getElementById('admin-panel'),
  backToUserBtn: document.getElementById('backToUserBtn'),
  adminAuthModal: document.getElementById('adminAuthModal'),
  adminUsernameInput: document.getElementById('adminUsernameInput'),
  adminPasswordInput: document.getElementById('adminPasswordInput'),
  adminLoginBtn: document.getElementById('adminLoginBtn'),
  adminCancelBtn: document.getElementById('adminCancelBtn'),
  logoutAdminBtn: document.getElementById('logoutAdminBtn'),
  userForm: document.getElementById('userForm'),
  userName: document.getElementById('userName'),
  userEmail: document.getElementById('userEmail'),
  userRows: document.getElementById('userRows'),
  resetUserForm: document.getElementById('resetUserForm'),
  userSubmitBtn: document.getElementById('userSubmitBtn'),
  openRegisterBtn: document.getElementById('openRegisterBtn'),
  openLoginBtn: document.getElementById('openLoginBtn'),
  userAvatarBtn: document.getElementById('userAvatarBtn'),
  avatarCircle: document.getElementById('avatarCircle'),
  userMenu: document.getElementById('userMenu'),
  userMenuName: document.getElementById('userMenuName'),
  userUpdateEmailBtn: document.getElementById('userUpdateEmailBtn'),
  userSubscriptionBtn: document.getElementById('userSubscriptionBtn'),
  userLogoutBtn: document.getElementById('userLogoutBtn'),
  registerModal: document.getElementById('registerModal'),
  registerForm: document.getElementById('registerForm'),
  registerUsername: document.getElementById('registerUsername'),
  registerEmail: document.getElementById('registerEmail'),
  registerPassword: document.getElementById('registerPassword'),
  registerAge: document.getElementById('registerAge'),
  registerGender: document.getElementById('registerGender'),
  registerCancelBtn: document.getElementById('registerCancelBtn'),
  loginModal: document.getElementById('loginModal'),
  loginForm: document.getElementById('loginForm'),
  loginUsername: document.getElementById('loginUsername'),
  loginPassword: document.getElementById('loginPassword'),
  loginCancelBtn: document.getElementById('loginCancelBtn'),
  successModal: document.getElementById('successModal'),
  successModalMessage: document.getElementById('successModalMessage'),
  logDateInput: document.getElementById('logDateInput'),
  exportCsvBtn: document.getElementById('exportCsvBtn'),
  exportPdfBtn: document.getElementById('exportPdfBtn'),
  profileForm: document.getElementById('profileForm'),
  profileAge: document.getElementById('profileAge'),
  profileGender: document.getElementById('profileGender'),
  profileWeight: document.getElementById('profileWeight'),
  profileHeight: document.getElementById('profileHeight'),
  profileActivity: document.getElementById('profileActivity'),
  profileSummary: document.getElementById('profileSummary'),
  progressFill: document.getElementById('progressFill'),
  targetCaloriesText: document.getElementById('targetCaloriesText'),
  macroChart: document.getElementById('macroChart'),

  logEntries: document.getElementById('logEntries'),
  totalsCard: document.getElementById('totalsCard'),
  adminFoodRows: document.getElementById('adminFoodRows'),
  adminLogView: document.getElementById('adminLogView'),
  foodForm: document.getElementById('foodForm'),
  foodName: document.getElementById('foodName'),
  foodGroup: document.getElementById('foodGroup'),
  foodCalories: document.getElementById('foodCalories'),
  foodProtein: document.getElementById('foodProtein'),
  foodCarbs: document.getElementById('foodCarbs'),
  foodFat: document.getElementById('foodFat'),
  resetForm: document.getElementById('resetForm'),
  tabs: document.querySelectorAll('.tab-button'),
  adminTab: document.getElementById('adminTab'),
  adminPanel: document.getElementById('admin-panel'),
  backToUserBtn: document.getElementById('backToUserBtn'),
  adminAuthModal: document.getElementById('adminAuthModal'),
  adminPasswordInput: document.getElementById('adminPasswordInput'),
  adminLoginBtn: document.getElementById('adminLoginBtn'),
  adminCancelBtn: document.getElementById('adminCancelBtn'),
  logoutAdminBtn: document.getElementById('logoutAdminBtn'),
  logDateInput: document.getElementById('logDateInput'),
  exportCsvBtn: document.getElementById('exportCsvBtn'),
  exportPdfBtn: document.getElementById('exportPdfBtn'),
  profileForm: document.getElementById('profileForm'),
  profileAge: document.getElementById('profileAge'),
  profileGender: document.getElementById('profileGender'),
  profileWeight: document.getElementById('profileWeight'),
  profileHeight: document.getElementById('profileHeight'),
  profileActivity: document.getElementById('profileActivity'),
  profileSummary: document.getElementById('profileSummary'),
  progressFill: document.getElementById('progressFill'),
  targetCaloriesText: document.getElementById('targetCaloriesText'),
  macroChart: document.getElementById('macroChart'),
};

let foods = [];
let logsByDate = {};
let profile = { age: '', gender: 'male', weight: '', height: '', activity: '1.2' };
let editFoodId = null;
let editUserId = null;
let users = [];
let adminAuthenticated = false;
let currentUser = null;
let currentDate = getTodayDate();
let macroChart = null;

function getTodayDate() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

function normalizeText(value) {
  return String(value)
    .normalize('NFD')
    .replace(/[-\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

function loadData() {
  const storedFoods = localStorage.getItem(STORAGE_FOODS);
  foods = storedFoods ? JSON.parse(storedFoods) : defaultFoods.slice();
  if (!storedFoods) {
    saveFoods();
  }

  const storedProfile = localStorage.getItem(STORAGE_PROFILE);
  profile = storedProfile ? JSON.parse(storedProfile) : { age: '', gender: 'male', weight: '', height: '', activity: '1.2' };
  const storedLog = localStorage.getItem(STORAGE_LOG);
  logsByDate = storedLog ? JSON.parse(storedLog) : {};
}

function saveFoods() {
  localStorage.setItem(STORAGE_FOODS, JSON.stringify(foods));
}

function saveLog() {
  localStorage.setItem(STORAGE_LOG, JSON.stringify(logsByDate));
}

function getLocalAccounts() {
  const data = localStorage.getItem(STORAGE_ACCOUNTS);
  return data ? JSON.parse(data) : [];
}

function saveLocalAccounts(accounts) {
  const normalized = Array.isArray(accounts) ? accounts : [];
  localStorage.setItem(STORAGE_ACCOUNTS, JSON.stringify(normalized));
}

function addLocalAccount(account) {
  const accounts = getLocalAccounts();
  const record = Object.assign({}, account);
  if (!record.id) {
    record.id = 'local-' + Date.now();
  }
  accounts.push(record);
  saveLocalAccounts(accounts);
  return record;
}

function updateLocalAccount(id, update) {
  const accounts = getLocalAccounts();
  const updated = accounts.map(function (item) {
    if (String(item.id) === String(id)) {
      return Object.assign({}, item, update, { id: item.id });
    }
    return item;
  });
  saveLocalAccounts(updated);
  return updated.find(function (item) {
    return String(item.id) === String(id);
  });
}

function removeLocalAccount(id) {
  const accounts = getLocalAccounts().filter(function (item) {
    return String(item.id) !== String(id);
  });
  saveLocalAccounts(accounts);
}

function mergeRemoteAndLocalAccounts(remoteAccounts) {
  const localAccounts = getLocalAccounts();
  const remoteIds = new Set(remoteAccounts.map(function (item) {
    return String(item.id);
  }));
  return remoteAccounts.concat(
    localAccounts.filter(function (item) {
      return !remoteIds.has(String(item.id));
    })
  );
}

function getAllAccounts() {
  return getAccounts()
    .then(function (data) {
      const remote = Array.isArray(data) ? data : [];
      return mergeRemoteAndLocalAccounts(remote);
    })
    .catch(function (error) {
      console.error(error);
      return getLocalAccounts();
    });
}

function saveProfileData() {
  localStorage.setItem(STORAGE_PROFILE, JSON.stringify(profile));
}

function getCurrentLog() {
  return logsByDate[currentDate] || [];
}

function ensureCurrentLog() {
  if (!logsByDate[currentDate]) {
    logsByDate[currentDate] = [];
  }
}

function formatNumber(value, digits = 0) {
  return Number(value).toLocaleString('vi-VN', { maximumFractionDigits: digits });
}

function isAdminAuthenticated() {
  return sessionStorage.getItem(STORAGE_ADMIN_AUTH) === 'true';
}

function setAdminAuthenticated(value) {
  adminAuthenticated = value;
  if (value) {
    sessionStorage.setItem(STORAGE_ADMIN_AUTH, 'true');
    if (elements.logoutAdminBtn) {
      elements.logoutAdminBtn.classList.remove('hidden');
    }
    if (elements.adminTab) {
      elements.adminTab.textContent = 'Admin (đã đăng nhập)';
    }
    if (elements.userForm) {
      loadUsers();
    }
  } else {
    sessionStorage.removeItem(STORAGE_ADMIN_AUTH);
    if (elements.logoutAdminBtn) {
      elements.logoutAdminBtn.classList.add('hidden');
    }
    if (elements.adminTab) {
      elements.adminTab.textContent = 'Admin';
    }
    hideAdminPanel();
  }
}

function showRegisterModal() {
  if (!elements.registerModal) return;
  elements.registerModal.classList.remove('hidden');
  elements.registerModal.setAttribute('aria-hidden', 'false');
  if (elements.registerUsername) {
    elements.registerUsername.focus();
  }
}

function hideRegisterModal() {
  if (!elements.registerModal) return;
  elements.registerModal.classList.add('hidden');
  elements.registerModal.setAttribute('aria-hidden', 'true');
  if (elements.registerForm) {
    elements.registerForm.reset();
  }
}

function submitRegisterForm(event) {
  event.preventDefault();
  if (!elements.registerUsername || !elements.registerEmail || !elements.registerPassword || !elements.registerAge || !elements.registerGender) return;

  const username = elements.registerUsername.value.trim();
  const email = elements.registerEmail.value.trim();
  const password = elements.registerPassword.value.trim();
  const age = Number(elements.registerAge.value);
  const gender = elements.registerGender.value;

  if (!username || !email || !password || !age || !gender) {
    showToast('Vui lòng điền đầy đủ thông tin.', 'warning');
    return;
  }

  const payload = {
    name: username,
    username: username,
    email: email,
    password: password,
    age: age,
    gender: gender,
    role: 'user',
  };

  createAccount(payload)
    .then(function (createdUser) {
      addLocalAccount(createdUser);
      showToast('Đăng ký thành công. Bạn có thể đăng nhập ngay bây giờ.', 'success');
      showStatusModal('Bạn đã đăng ký thành công.');
      hideRegisterModal();
    })
    .catch(function (error) {
      console.error(error);
      addLocalAccount(payload);
      showToast('Đăng ký thành công (lưu cục bộ). Máy chủ hiện không khả dụng.', 'warning');
      showStatusModal('Bạn đã đăng ký thành công.');
      hideRegisterModal();
    });
}

function showLoginModal() {
  if (!elements.loginModal) return;
  elements.loginModal.classList.remove('hidden');
  elements.loginModal.setAttribute('aria-hidden', 'false');
  if (elements.loginUsername) {
    elements.loginUsername.focus();
  }
}

function hideLoginModal() {
  if (!elements.loginModal) return;
  elements.loginModal.classList.add('hidden');
  elements.loginModal.setAttribute('aria-hidden', 'true');
  if (elements.loginForm) {
    elements.loginForm.reset();
  }
}

function setUserAuthenticated(user) {
  if (user) {
    sessionStorage.setItem(STORAGE_USER_AUTH, 'true');
    sessionStorage.setItem(STORAGE_CURRENT_USER, JSON.stringify(user));
    currentUser = user;
  } else {
    sessionStorage.removeItem(STORAGE_USER_AUTH);
    sessionStorage.removeItem(STORAGE_CURRENT_USER);
    currentUser = null;
  }
  renderUserAvatar();
}

function loadUserSession() {
  const userData = sessionStorage.getItem(STORAGE_CURRENT_USER);
  if (userData) {
    try {
      currentUser = JSON.parse(userData);
    } catch (error) {
      currentUser = null;
    }
  }
}

function submitLoginForm(event) {
  event.preventDefault();
  if (!elements.loginUsername || !elements.loginPassword) return;

  const username = elements.loginUsername.value.trim();
  const password = elements.loginPassword.value.trim();

  if (!username || !password) {
    showToast('Vui lòng điền tên đăng nhập và mật khẩu.', 'warning');
    return;
  }

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    setAdminAuthenticated(true);
    hideLoginModal();
    showToast('Đăng nhập admin thành công.', 'success');
    showStatusModal('Bạn đã đăng nhập với quyền admin.');
    window.location.href = 'admin.html';
    return;
  }

  getAllAccounts()
    .then(function (allUsers) {
      const user = Array.isArray(allUsers)
        ? allUsers.find(function (item) {
            return item.username === username && item.password === password;
          })
        : null;
      if (!user) {
        showToast('Tên đăng nhập hoặc mật khẩu không đúng.', 'error');
        return;
      }
      setUserAuthenticated(user);
      hideLoginModal();
      renderProfile();
      renderUserAvatar();
      showToast('Đăng nhập thành công.', 'success');
      showStatusModal('Bạn đã đăng nhập thành công.');
    })
    .catch(function (error) {
      console.error(error);
      showToast('Không thể đăng nhập.', 'error');
    });
}

function getUserInitials(name) {
  if (!name) return 'U';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function toggleUserMenu() {
  if (!elements.userMenu || !elements.userAvatarBtn) return;
  const isHidden = elements.userMenu.classList.contains('hidden');
  if (isHidden) {
    elements.userMenu.classList.remove('hidden');
    elements.userMenu.setAttribute('aria-hidden', 'false');
  } else {
    elements.userMenu.classList.add('hidden');
    elements.userMenu.setAttribute('aria-hidden', 'true');
  }
}

function hideUserMenu() {
  if (!elements.userMenu) return;
  elements.userMenu.classList.add('hidden');
  elements.userMenu.setAttribute('aria-hidden', 'true');
}

function renderUserAvatar() {
  if (!elements.userAvatarBtn || !elements.userMenu || !elements.openLoginBtn || !elements.openRegisterBtn) return;
  const isLoggedIn = currentUser !== null;
  elements.userAvatarBtn.classList.toggle('hidden', !isLoggedIn);
  elements.openLoginBtn.classList.toggle('hidden', isLoggedIn);
  elements.openRegisterBtn.classList.toggle('hidden', isLoggedIn);
  if (!isLoggedIn) {
    hideUserMenu();
    return;
  }
  if (elements.userMenuName) {
    elements.userMenuName.textContent = currentUser.name || currentUser.email || 'Bạn';
  }
  if (elements.avatarCircle) {
    elements.avatarCircle.textContent = getUserInitials(currentUser.name || currentUser.email || 'U');
  }
}

function logoutUser() {
  setUserAuthenticated(null);
  hideUserMenu();
  renderProfile();
  showToast('Bạn đã đăng xuất.', 'success');
  showStatusModal('Bạn đã đăng xuất thành công.');
}

function showAdminLogin() {
  elements.adminAuthModal.classList.remove('hidden');
  elements.adminAuthModal.setAttribute('aria-hidden', 'false');
  elements.adminUsernameInput.value = '';
  elements.adminPasswordInput.value = '';
  elements.adminUsernameInput.focus();
}

function hideAdminLogin() {
  elements.adminAuthModal.classList.add('hidden');
  elements.adminAuthModal.setAttribute('aria-hidden', 'true');
  elements.adminUsernameInput.value = '';
  elements.adminPasswordInput.value = '';
}

function hideAdminPanel() {
  document.getElementById('admin-panel').classList.remove('active');
  document.getElementById('user-panel').classList.add('active');
  elements.tabs.forEach((button) => {
    button.classList.toggle('active', button.dataset.target === 'user-panel');
  });
}

function activateTab(button) {
  elements.tabs.forEach((btn) => btn.classList.remove('active'));
  button.classList.add('active');
  document.querySelectorAll('.panel').forEach((panel) => panel.classList.remove('active'));
  document.getElementById(button.dataset.target).classList.add('active');
}

function handleTabClick(button) {
  if (button.dataset.target === 'admin-panel' && !adminAuthenticated) {
    showAdminLogin();
    return;
  }
  activateTab(button);
}

function showToast(message, icon = 'success') {
  if (window.Swal) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon,
      title: message,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
    return;
  }
  alert(message);
}

function showStatusModal(message) {
  if (!elements.successModal || !elements.successModalMessage) return;
  elements.successModalMessage.textContent = message;
  if (window.bootstrap && typeof window.bootstrap.Modal === 'function') {
    const modal = new bootstrap.Modal(elements.successModal);
    modal.show();
  } else {
    alert(message);
  }
}

function authenticateAdmin() {
  const username = elements.adminUsernameInput.value.trim();
  const password = elements.adminPasswordInput.value.trim();

  if (!username || !password) {
    showToast('Vui lòng nhập tài khoản và mật khẩu.', 'warning');
    if (!username) {
      elements.adminUsernameInput.focus();
    } else {
      elements.adminPasswordInput.focus();
    }
    return;
  }

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    setAdminAuthenticated(true);
    hideAdminLogin();
    if (elements.adminTab) {
      activateTab(elements.adminTab);
    }
    renderAdminList();
    renderAdminLog();
    return;
  }

  showToast('Tên tài khoản hoặc mật khẩu không đúng', 'error');
  elements.adminUsernameInput.focus();
}

function calculateBmr() {
  const age = Number(profile.age);
  const weight = Number(profile.weight);
  const height = Number(profile.height);
  if (!age || !weight || !height) {
    return null;
  }
  if (profile.gender === 'female') {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
  return 10 * weight + 6.25 * height - 5 * age + 5;
}

function calculateBmi() {
  const weight = Number(profile.weight);
  const height = Number(profile.height);
  if (!weight || !height) {
    return null;
  }
  const heightMeters = height > 10 ? height / 100 : height;
  return heightMeters > 0 ? weight / (heightMeters * heightMeters) : null;
}

function getAgeAdvice(age) {
  if (age < 18) {
    return 'Ưu tiên chế độ ăn giàu dinh dưỡng, đủ protein, canxi và rau củ để hỗ trợ phát triển.';
  }
  if (age < 30) {
    return 'Giữ cân bằng calo, chia bữa nhỏ đều, tập trung vào protein nạc và carbohydrate phức tạp.';
  }
  if (age < 50) {
    return 'Kiểm soát cân nặng bằng việc tăng chất xơ, giảm tinh bột tinh chế và duy trì hoạt động thể chất.';
  }
  return 'Tăng cường protein, chất xơ và canxi; hạn chế muối, đường và ưu tiên thực phẩm dễ tiêu hóa.';
}

function getBmiAdvice(bmi) {
  if (bmi < 18.5) {
    return 'Bạn cần tăng lượng calo chất lượng, bổ sung protein và bữa ăn nhỏ thường xuyên.';
  }
  if (bmi < 25) {
    return 'Duy trì cân nặng hiện tại với chế độ ăn cân bằng và hoạt động đều đặn.';
  }
  if (bmi < 30) {
    return 'Giảm nhẹ calo hàng ngày, tăng rau củ và protein nạc, hạn chế đồ ngọt và dầu mỡ.';
  }
  return 'Áp dụng chế độ giảm cân chặt chẽ hơn, giảm tinh bột đơn và tăng hoạt động vận động.';
}

function getProfileMethodSuggestion() {
  const age = Number(profile.age);
  const bmi = calculateBmi();
  const ageText = age ? getAgeAdvice(age) : 'Nhập tuổi để nhận gợi ý phù hợp.';
  const bmiText = bmi ? getBmiAdvice(bmi) : 'Nhập chiều cao và cân nặng để đánh giá BMI.';
  return {
    ageText,
    bmiText,
    bmiValue: bmi ? bmi.toFixed(1) : null,
  };
}

function getTargetCalories() {
  const bmr = calculateBmr();
  return bmr ? Math.round(bmr * Number(profile.activity)) : DEFAULT_TARGET_CALORIES;
}

function renderProfile() {
  elements.profileAge.value = profile.age;
  elements.profileGender.value = profile.gender;
  elements.profileWeight.value = profile.weight;
  elements.profileHeight.value = profile.height;
  elements.profileActivity.value = profile.activity;

  const bmr = calculateBmr();
  const target = getTargetCalories();
  const method = getProfileMethodSuggestion();

  const userInfo = currentUser ? `<div class="profile-user"><strong>Xin chào, ${currentUser.name || currentUser.email}</strong></div>` : '';

  if (!bmr) {
    elements.profileSummary.innerHTML = `${userInfo}<strong>Chưa có thông tin cá nhân đầy đủ.</strong> Nhập tuổi, cân nặng và chiều cao để tính BMR/TDEE và nhận phương pháp phù hợp.`;
    return;
  }

  elements.profileSummary.innerHTML = `
    ${userInfo}
    <strong>Mục tiêu hàng ngày</strong>
    <p>BMR: ${formatNumber(bmr, 0)} kcal</p>
    <p>TDEE: ${formatNumber(target, 0)} kcal</p>
    <p>Hiện tại sẽ dùng TDEE làm mục tiêu calo so sánh.</p>
    <strong>Phương pháp đề xuất</strong>
    <p><strong>Tuổi:</strong> ${method.ageText}</p>
    <p><strong>BMI:</strong> ${method.bmiValue ? method.bmiValue + ' (chỉ số BMI)' : 'Chưa có'} - ${method.bmiText}</p>
  `;
}

function renderTotals() {
  const totals = computeTotals();
  const carbCalories = totals.carbs * 4;
  const proteinCalories = totals.protein * 4;
  const fatCalories = totals.fat * 9;
  const totalMacroCalories = carbCalories + proteinCalories + fatCalories;
  const ratio = (value) => (totalMacroCalories ? `${Math.round((value / totalMacroCalories) * 100)}%` : '0%');

  elements.totalsCard.innerHTML = `
    <div class="summary-card">
      <strong>${formatNumber(totals.calories, 0)} kcal</strong>
      <span>Tổng calo</span>
    </div>
    <div class="summary-card">
      <strong>${formatNumber(totals.protein, 1)} g</strong>
      <span>Protein</span>
    </div>
    <div class="summary-card">
      <strong>${formatNumber(totals.carbs, 1)} g</strong>
      <span>Carbs</span>
    </div>
    <div class="summary-card">
      <strong>${formatNumber(totals.fat, 1)} g</strong>
      <span>Fat</span>
    </div>
    <div class="summary-card">
      <strong>${ratio(proteinCalories)}</strong>
      <span>% protein</span>
    </div>
    <div class="summary-card">
      <strong>${ratio(carbCalories)}</strong>
      <span>% carbs</span>
    </div>
    <div class="summary-card">
      <strong>${ratio(fatCalories)}</strong>
      <span>% fat</span>
    </div>
  `;

  renderProgress(totals.calories);
  renderMacroChart(totals);
}

function renderProgress(calories) {
  const target = getTargetCalories();
  const percent = target ? Math.min((calories / target) * 100, 200) : 0;
  elements.progressFill.style.width = `${percent}%`;
  elements.progressFill.style.background = percent > 100 ? '#ef5350' : 'var(--primary)';
  elements.targetCaloriesText.textContent = `${formatNumber(calories, 0)} / ${formatNumber(target, 0)} kcal`;
}

function initMacroChart() {
  if (!window.Chart) {
    return;
  }

  const ctx = elements.macroChart.getContext('2d');
  macroChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Protein', 'Carbs', 'Fat'],
      datasets: [
        {
          data: [0, 0, 0],
          backgroundColor: ['#2f80ed', '#56ccf2', '#27ae60'],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    },
  });
}

function renderMacroChart(totals) {
  if (!macroChart) {
    initMacroChart();
  }
  if (!macroChart) return;
  macroChart.data.datasets[0].data = [totals.protein * 4, totals.carbs * 4, totals.fat * 9];
  macroChart.update();
}

function computeTotals() {
  return getCurrentLog().reduce(
    (acc, entry) => {
      const food = foods.find((item) => item.id === entry.foodId);
      if (!food) return acc;
      const multiplier = entry.grams / 100;
      acc.calories += food.calories * multiplier;
      acc.protein += food.protein * multiplier;
      acc.carbs += food.carbs * multiplier;
      acc.fat += food.fat * multiplier;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

function renderFoodList() {
  const query = normalizeText(elements.searchInput.value.trim());
  const group = elements.groupFilter.value;
  const filtered = foods.filter((food) => {
    const normalizedName = normalizeText(food.name);
    const normalizedGroup = normalizeText(food.group);
    const matchesText = !query || normalizedName.includes(query) || normalizedGroup.includes(query);
    const matchesGroup = group ? food.group === group : true;
    return matchesText && matchesGroup;
  });

  elements.foodList.innerHTML = filtered
    .map((food) => {
      const safeId = food.id.replace(/[^a-zA-Z0-9_-]/g, '');
      return `
      <div class="food-item">
        <div>
          <strong>${food.name}</strong>
          <small>${food.group} • ${formatNumber(food.calories)} kcal / 100g</small>
          <small>Protein ${formatNumber(food.protein, 1)}g · Carbs ${formatNumber(food.carbs, 1)}g · Fat ${formatNumber(food.fat, 1)}g</small>
        </div>
        <div class="food-controls">
          <input id="grams-${safeId}" type="number" min="1" value="100" aria-label="Số gram" />
          <select id="meal-${safeId}" aria-label="Bữa">
            <option value="Sáng">Sáng</option>
            <option value="Trưa">Trưa</option>
            <option value="Chiều">Chiều</option>
            <option value="Ăn vặt">Ăn vặt</option>
          </select>
          <button class="btn success" onclick="addFoodToLog('${food.id}')">Thêm</button>
        </div>
      </div>
    `;
    })
    .join('');

  if (!filtered.length) {
    elements.foodList.innerHTML = '<p>Không tìm thấy thực phẩm. Hãy thử từ khóa khác hoặc thêm mới ở Admin.</p>';
  }
}

function renderLog() {
  const entries = getCurrentLog();

  elements.logEntries.innerHTML = entries
    .map((entry, index) => {
      const food = foods.find((item) => item.id === entry.foodId);
      if (!food) return '';
      const multiplier = entry.grams / 100;
      return `
        <tr class="food-row">
          <td>${food.name}</td>
          <td>${entry.meal}</td>
          <td>${formatNumber(entry.grams)} g</td>
          <td>${formatNumber(food.calories * multiplier, 0)} kcal</td>
          <td>${formatNumber(food.protein * multiplier, 1)} / ${formatNumber(food.carbs * multiplier, 1)} / ${formatNumber(food.fat * multiplier, 1)}</td>
          <td><button class="btn danger" onclick="removeLogEntry(${index})">Xóa</button></td>
        </tr>
      `;
    })
    .join('');

  if (!entries.length) {
    elements.logEntries.innerHTML = '<tr><td colspan="6">Chưa có thực phẩm trong nhật ký. Thêm một món để bắt đầu.</td></tr>';
  }

  renderTotals();
  renderProfile();
  if (adminAuthenticated) {
    renderAdminList();
    renderAdminLog();
  }
}

function renderAdminList() {
  elements.adminFoodRows.innerHTML = foods
    .map(
      (food) => `
      <tr>
        <td>${food.name}</td>
        <td>${food.group}</td>
        <td>${formatNumber(food.calories)}</td>
        <td>${formatNumber(food.protein, 1)}</td>
        <td>${formatNumber(food.carbs, 1)}</td>
        <td>${formatNumber(food.fat, 1)}</td>
        <td>
          <button class="btn secondary" onclick="editFood('${food.id}')">Sửa</button>
          <button class="btn danger" onclick="deleteFood('${food.id}')">Xóa</button>
        </td>
      </tr>
    `
    )
    .join('');
}

function renderAdminLog() {
  const entries = getCurrentLog();
  elements.adminLogView.innerHTML = entries
    .map((entry) => {
      const food = foods.find((item) => item.id === entry.foodId);
      if (!food) return '';
      const multiplier = entry.grams / 100;
      return `
        <tr>
          <td>${food.name}</td>
          <td>${entry.meal}</td>
          <td>${formatNumber(entry.grams)} g</td>
          <td>${formatNumber(food.calories * multiplier, 0)}</td>
          <td>${formatNumber(food.protein * multiplier, 1)}</td>
          <td>${formatNumber(food.carbs * multiplier, 1)}</td>
          <td>${formatNumber(food.fat * multiplier, 1)}</td>
        </tr>
      `;
    })
    .join('');

  if (!entries.length) {
    elements.adminLogView.innerHTML = '<tr><td colspan="7">Chưa có nhật ký hôm nay.</td></tr>';
  }
}

function loadUsers() {
  if (!elements.userRows) return;
  getAllAccounts()
    .then(function (data) {
      users = Array.isArray(data) ? data : [];
      renderUserList();
    })
    .catch(function (error) {
      console.error(error);
      showToast('Không thể tải danh sách người dùng.', 'error');
      users = getLocalAccounts();
      renderUserList();
    });
}

function renderUserList() {
  if (!elements.userRows) return;
  elements.userRows.innerHTML = users.length
    ? users
        .map(function (user) {
          return `
            <tr>
              <td>${user.name || user.username || 'Không tên'}</td>
              <td>${user.email || '-'}</td>
              <td>
                <button class="btn danger" onclick="deleteUserEntry('${user.id}')">Xóa</button>
              </td>
            </tr>
          `;
        })
        .join('')
    : '<tr><td colspan="3">Chưa có người dùng nào.</td></tr>';
}

function editUserEntry(id) {
  // Removed: edit functionality has been disabled
}

function deleteUserEntry(id) {
  if (!confirm('Bạn có chắc muốn xóa người dùng này không?')) return;
  deleteAccount(id)
    .then(function () {
      showToast('Xóa người dùng thành công', 'success');
      loadUsers();
    })
    .catch(function (error) {
      console.error(error);
      showToast('Không thể xóa người dùng.', 'error');
    });
}

function resetUserForm() {
  editUserId = null;
  if (elements.userForm) {
    elements.userForm.reset();
  }
  if (elements.userSubmitBtn) {
    elements.userSubmitBtn.textContent = 'Lưu người dùng';
  }
}

function submitUserForm(event) {
  event.preventDefault();
  if (!elements.userName || !elements.userEmail) return;

  const name = elements.userName.value.trim();
  const email = elements.userEmail.value.trim();

  if (!name || !email) {
    showToast('Vui lòng nhập tên và email người dùng.', 'warning');
    return;
  }

  const payload = { name: name, email: email, role: 'user' };
  const request = editUserId ? updateAccount(editUserId, payload) : createAccount(payload);

  request
    .then(function (result) {
      if (editUserId) {
        updateLocalAccount(editUserId, payload);
      } else {
        addLocalAccount(result);
      }
      showToast(editUserId ? 'Cập nhật người dùng thành công' : 'Thêm người dùng thành công', 'success');
      resetUserForm();
      loadUsers();
    })
    .catch(function (error) {
      console.error(error);
      showToast('Không thể lưu người dùng.', 'error');
    });
}

function addFoodToLog(foodId) {
  const safeId = foodId.replace(/[^a-zA-Z0-9_-]/g, '');
  const grams = Number(document.getElementById(`grams-${safeId}`).value);
  const meal = document.getElementById(`meal-${safeId}`).value;

  if (!grams || grams <= 0) {
    showToast('Vui lòng nhập số gram hợp lệ.', 'warning');
    return;
  }

  ensureCurrentLog();
  logsByDate[currentDate].push({ foodId, grams, meal });
  saveLog();
  renderLog();
  showToast('Thêm thành công', 'success');
}

function removeLogEntry(index) {
  const entries = getCurrentLog();
  entries.splice(index, 1);
  saveLog();
  renderLog();
  showToast('Xóa thành công', 'success');
}

function editFood(id) {
  const food = foods.find((item) => item.id === id);
  if (!food) return;
  editFoodId = id;
  elements.foodName.value = food.name;
  elements.foodGroup.value = food.group;
  elements.foodCalories.value = food.calories;
  elements.foodProtein.value = food.protein;
  elements.foodCarbs.value = food.carbs;
  elements.foodFat.value = food.fat;
  elements.foodForm.querySelector('.primary').textContent = 'Cập nhật';
}

function deleteFood(id) {
  const confirmed = confirm('Xóa thực phẩm này? Hành động không thể hoàn tác.');
  if (!confirmed) return;
  foods = foods.filter((item) => item.id !== id);
  Object.keys(logsByDate).forEach((day) => {
    logsByDate[day] = logsByDate[day].filter((entry) => entry.foodId !== id);
  });
  saveFoods();
  saveLog();
  renderFoodList();
  renderLog();
  showToast('Đã xóa sản phẩm', 'success');
}

function resetForm() {
  editFoodId = null;
  elements.foodForm.reset();
  elements.foodForm.querySelector('.primary').textContent = 'Lưu thực phẩm';
}

function setCurrentDate(date) {
  currentDate = date || getTodayDate();
  elements.logDateInput.value = currentDate;
  renderLog();
}

function exportCsvReport() {
  const entries = getCurrentLog();
  if (!entries.length) {
    showToast('Không có dữ liệu để xuất.', 'warning');
    return;
  }
  const rows = [
    ['Ngày', 'Thực phẩm', 'Bữa', 'Khối lượng', 'Calo', 'Protein', 'Carbs', 'Fat'],
  ];
  entries.forEach((entry) => {
    const food = foods.find((item) => item.id === entry.foodId);
    if (!food) return;
    const multiplier = entry.grams / 100;
    rows.push([
      currentDate,
      food.name,
      entry.meal,
      `${entry.grams}g`,
      formatNumber(food.calories * multiplier, 0),
      formatNumber(food.protein * multiplier, 1),
      formatNumber(food.carbs * multiplier, 1),
      formatNumber(food.fat * multiplier, 1),
    ]);
  });
  const csvContent = rows.map((row) => row.join(',')).join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `NutriCheck-${currentDate}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('Xuất CSV thành công', 'success');
}

function exportPdfReport() {
  const entries = getCurrentLog();
  if (!entries.length) {
    showToast('Không có dữ liệu để xuất.', 'warning');
    return;
  }
  const jsPDF = window.jspdf?.jsPDF;
  if (!jsPDF) {
    showToast('Không tìm thấy jsPDF.', 'error');
    return;
  }
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  doc.setFontSize(14);
  doc.text(`Báo cáo NutriCheck - ${currentDate}`, 40, 50);
  doc.setFontSize(10);
  let y = 80;
  entries.forEach((entry, index) => {
    const food = foods.find((item) => item.id === entry.foodId);
    if (!food) return;
    const multiplier = entry.grams / 100;
    doc.text(
      `${index + 1}. ${food.name} | ${entry.meal} | ${entry.grams}g | ${formatNumber(food.calories * multiplier, 0)} kcal | ${formatNumber(food.protein * multiplier, 1)}g P | ${formatNumber(food.carbs * multiplier, 1)}g C | ${formatNumber(food.fat * multiplier, 1)}g F`,
      40,
      y
    );
    y += 18;
    if (y > 760) {
      doc.addPage();
      y = 40;
    }
  });
  doc.save(`NutriCheck-${currentDate}.pdf`);
  showToast('Xuất PDF thành công', 'success');
}

function saveProfile(event) {
  if (event) {
    event.preventDefault();
  }
  profile.age = elements.profileAge.value;
  profile.gender = elements.profileGender.value;
  profile.weight = elements.profileWeight.value;
  const rawHeight = Number(elements.profileHeight.value);
  profile.height = rawHeight > 0 && rawHeight < 10 ? rawHeight * 100 : rawHeight;
  profile.activity = elements.profileActivity.value;
  saveProfileData();
  renderProfile();
  renderTotals();
  showToast('Cập nhật mục tiêu thành công', 'success');
}

function initTabs() {
  elements.tabs.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      handleTabClick(button);
    });
  });

  if (elements.adminLoginBtn) {
    elements.adminLoginBtn.addEventListener('click', authenticateAdmin);
  }
  if (elements.adminCancelBtn) {
    elements.adminCancelBtn.addEventListener('click', hideAdminLogin);
  }
  if (elements.logoutAdminBtn) {
    elements.logoutAdminBtn.addEventListener('click', () => setAdminAuthenticated(false));
  }
  if (elements.backToUserBtn) {
    elements.backToUserBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
  if (elements.adminPasswordInput) {
    elements.adminPasswordInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        authenticateAdmin();
      }
    });
  }
  if (elements.adminUsernameInput) {
    elements.adminUsernameInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        authenticateAdmin();
      }
    });
  }
  if (elements.logDateInput) {
    elements.logDateInput.addEventListener('change', (event) => setCurrentDate(event.target.value));
  }
  if (elements.exportCsvBtn) {
    elements.exportCsvBtn.addEventListener('click', exportCsvReport);
  }
  if (elements.exportPdfBtn) {
    elements.exportPdfBtn.addEventListener('click', exportPdfReport);
  }
  if (elements.profileForm) {
    elements.profileForm.addEventListener('submit', saveProfile);
  }
  if (elements.userForm) {
    elements.userForm.addEventListener('submit', submitUserForm);
  }
  if (elements.resetUserForm) {
    elements.resetUserForm.addEventListener('click', resetUserForm);
  }
  if (elements.openRegisterBtn) {
    elements.openRegisterBtn.addEventListener('click', showRegisterModal);
  }
  if (elements.openLoginBtn) {
    elements.openLoginBtn.addEventListener('click', showLoginModal);
  }
  if (elements.userAvatarBtn) {
    elements.userAvatarBtn.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleUserMenu();
    });
  }
  if (elements.userLogoutBtn) {
    elements.userLogoutBtn.addEventListener('click', logoutUser);
  }
  if (elements.userUpdateEmailBtn) {
    elements.userUpdateEmailBtn.addEventListener('click', function () {
      hideUserMenu();
      showToast('Chức năng cập nhật email sẽ sớm có.', 'info');
    });
  }
  if (elements.userSubscriptionBtn) {
    elements.userSubscriptionBtn.addEventListener('click', function () {
      hideUserMenu();
      showToast('Chức năng quản lý subscription sẽ sớm có.', 'info');
    });
  }
  if (elements.registerCancelBtn) {
    elements.registerCancelBtn.addEventListener('click', hideRegisterModal);
  }
  if (elements.registerForm) {
    elements.registerForm.addEventListener('submit', submitRegisterForm);
  }
  if (elements.loginCancelBtn) {
    elements.loginCancelBtn.addEventListener('click', hideLoginModal);
  }
  if (elements.loginForm) {
    elements.loginForm.addEventListener('submit', submitLoginForm);
  }
  document.addEventListener('click', function (event) {
    if (!elements.userMenu || !elements.userAvatarBtn) return;
    if (!elements.userMenu.contains(event.target) && event.target !== elements.userAvatarBtn) {
      hideUserMenu();
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  loadData();
  loadUserSession();
  renderUserAvatar();
  setAdminAuthenticated(isAdminAuthenticated());
  if (!elements.logDateInput.value) {
    elements.logDateInput.value = currentDate;
  }
  initTabs();

  if (window.location.pathname.endsWith('admin.html')) {
    if (!adminAuthenticated) {
      showAdminLogin();
    } else {
      if (elements.adminTab) activateTab(elements.adminTab);
      renderAdminList();
      renderAdminLog();
    }
  }
  renderProfile();
  renderFoodList();
  renderLog();
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', renderFoodList);
  }
  if (elements.groupFilter) {
    elements.groupFilter.addEventListener('change', renderFoodList);
  }
  if (elements.foodForm) {
    elements.foodForm.addEventListener('submit', submitFoodForm);
  }
  if (elements.resetForm) {
    elements.resetForm.addEventListener('click', resetForm);
  }
  if (elements.userForm) {
    loadUsers();
  }
});

function submitFoodForm(event) {
  event.preventDefault();
  const name = elements.foodName.value.trim();
  const group = elements.foodGroup.value;
  const calories = Number(elements.foodCalories.value);
  const protein = Number(elements.foodProtein.value);
  const carbs = Number(elements.foodCarbs.value);
  const fat = Number(elements.foodFat.value);

  if (!name || !group || calories < 0 || protein < 0 || carbs < 0 || fat < 0) {
    showToast('Vui lòng nhập đầy đủ giá trị hợp lệ.', 'warning');
    return;
  }

  if (editFoodId) {
    const food = foods.find((item) => item.id === editFoodId);
    if (food) {
      food.name = name;
      food.group = group;
      food.calories = calories;
      food.protein = protein;
      food.carbs = carbs;
      food.fat = fat;
    }
  } else {
    const id = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`;
    foods.push({ id, name, group, calories, protein, carbs, fat });
  }

  saveFoods();
  resetForm();
  renderFoodList();
  renderAdminList();
  showToast('Lưu thực phẩm thành công', 'success');
}
