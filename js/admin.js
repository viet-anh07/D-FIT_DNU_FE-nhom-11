// User Management System
let currentEditingUserId = null;

// DOM Elements
const userRows = document.getElementById('userRows');

// Admin info elements
const adminInfoForm = document.getElementById('adminInfoForm');
const adminNameInput = document.getElementById('adminName');
const adminEmailInput = document.getElementById('adminEmail');
const adminNewPasswordInput = document.getElementById('adminNewPassword');
let currentAdminUserId = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  setupUserManagement();
});

// Setup user management
function setupUserManagement() {
  // Admin info form submission
  if (adminInfoForm) {
    adminInfoForm.addEventListener('submit', handleAdminInfoSubmit);
  }
  
  // Load users on page load if admin is authenticated
  if (typeof isAdminAuthenticated === 'function' && isAdminAuthenticated()) {
    loadUsersFromScript();
  }
}

// Load users using script.js's function if available
function loadUsersFromScript() {
  if (typeof loadUsers === 'function') {
    loadUsers();
    // Try to load admin info from users array after a short delay
    setTimeout(function() {
      if (typeof users !== 'undefined' && Array.isArray(users)) {
        loadAdminInfo(users);
      }
    }, 100);
  } else {
    loadUsersFromAPI();
  }
}

// Fallback: Load users directly from API
function loadUsersFromAPI() {
  if (typeof getAccounts !== 'function') {
    console.error('getAccounts function not found');
    return;
  }
  
  getAccounts()
    .then(function(response) {
      const usersData = Array.isArray(response) ? response : [];
      displayUserList(usersData);
      loadAdminInfo(usersData);
    })
    .catch(function(error) {
      console.error('Error loading users:', error);
      showErrorMessage('Không thể tải danh sách người dùng');
    });
}

// Load admin info into form
function loadAdminInfo(usersList) {
  if (!usersList || usersList.length === 0 || !adminInfoForm) return;
  
  // Find admin user
  const adminUser = usersList.find(function(user) {
    return user.role === 'admin' || user.type === 'admin';
  });
  
  if (adminUser) {
    currentAdminUserId = adminUser.id;
    adminNameInput.value = adminUser.name || adminUser.username || '';
    adminEmailInput.value = adminUser.email || '';
  }
}

// Handle admin info form submission
function handleAdminInfoSubmit(event) {
  event.preventDefault();
  
  const name = adminNameInput.value.trim();
  const email = adminEmailInput.value.trim();
  const newPassword = adminNewPasswordInput.value.trim();
  
  // Validation
  if (!name) {
    showErrorMessage('Vui lòng nhập tên admin');
    adminNameInput.focus();
    return;
  }
  
  if (!email) {
    showErrorMessage('Vui lòng nhập email');
    adminEmailInput.focus();
    return;
  }
  
  if (!isValidEmail(email)) {
    showErrorMessage('Email không hợp lệ');
    adminEmailInput.focus();
    return;
  }
  
  if (!currentAdminUserId) {
    showErrorMessage('Lỗi: Không tìm thấy tài khoản admin');
    return;
  }
  
  const userData = {
    name: name,
    username: name,
    email: email,
    role: 'admin'
  };
  
  // If password is provided, add it to data
  if (newPassword) {
    userData.password = newPassword;
  }
  
  // Update admin user
  if (typeof updateAccount === 'function') {
    updateAccount(currentAdminUserId, userData)
      .then(function() {
        showSuccessMessage('Cập nhật thông tin admin thành công');
        adminNewPasswordInput.value = '';
        loadUsersFromScript();
      })
      .catch(function(error) {
        showErrorMessage('Không thể cập nhật thông tin admin: ' + error.message);
      });
  }
}

// Display users in table
function displayUserList(usersList) {
  if (!userRows) return;
  
  userRows.innerHTML = '';
  
  if (!usersList || usersList.length === 0) {
    userRows.innerHTML = '<tr><td colspan="3" style="text-align: center; padding: 20px; color: #999;">Không có người dùng</td></tr>';
    return;
  }
  
  usersList.forEach(function(user) {
    const row = document.createElement('tr');
    const userName = user.username || user.name || 'N/A';
    const userEmail = user.email || 'N/A';
    
    row.innerHTML = `
      <td>${escapeHtml(userName)}</td>
      <td>${escapeHtml(userEmail)}</td>
      <td class="action-buttons">
        <button class="btn btn-sm danger" onclick="deleteUserEntry('${user.id}')">Xóa</button>
      </td>
    `;
    userRows.appendChild(row);
  });
}

// Delete user entry
function deleteUserEntry(userId) {
  // Find user name for confirmation
  let userName = 'Người dùng này';
  if (typeof users !== 'undefined' && Array.isArray(users)) {
    const user = users.find(u => String(u.id) === String(userId));
    if (user) {
      userName = user.name || user.username || userName;
    }
  }
  
  if (!confirm(`Bạn có chắc chắn muốn xóa người dùng "${userName}"?`)) {
    return;
  }
  
  if (typeof deleteAccount === 'function') {
    deleteAccount(userId)
      .then(function() {
        showSuccessMessage('Xóa người dùng thành công');
        loadUsersFromScript();
      })
      .catch(function(error) {
        showErrorMessage('Không thể xóa người dùng: ' + error.message);
      });
  }
}

// Utility: Show error message
function showErrorMessage(message) {
  if (typeof showToast === 'function') {
    showToast(message, 'error');
  } else {
    alert(message);
  }
}

// Utility: Show success message
function showSuccessMessage(message) {
  if (typeof showToast === 'function') {
    showToast(message, 'success');
  } else {
    alert(message);
  }
}

// Utility: Escape HTML to prevent XSS
function escapeHtml(text) {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) {
    return map[m];
  });
}

// Utility: Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

