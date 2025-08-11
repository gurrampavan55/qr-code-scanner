// QR Code Scanner - Production Ready
const fileInput = document.getElementById('fileInput');
const qrCanvas = document.getElementById('qrCanvas');
const ctx = qrCanvas.getContext('2d');
const resultDiv = document.getElementById('result');

// Loading state management
let isLoading = false;

// Error handling function
function showError(message) {
  resultDiv.innerHTML = `<div class="error">❌ ${message}</div>`;
}

// Success handling function
function showSuccess(data) {
  // Sanitize the URL to prevent XSS
  const sanitizedData = data.replace(/[<>]/g, '');
  const isUrl = /^https?:\/\//.test(sanitizedData);
  
  if (isUrl) {
    resultDiv.innerHTML = `
      <div class="success">
        ✅ QR Code Detected!<br>
        <a href="${sanitizedData}" target="_blank" rel="noopener noreferrer">${sanitizedData}</a>
      </div>
    `;
  } else {
    resultDiv.innerHTML = `
      <div class="success">
        ✅ QR Code Content:<br>
        <span class="qr-content">${sanitizedData}</span>
      </div>
    `;
  }
}

// Loading state function
function setLoading(loading) {
  isLoading = loading;
  if (loading) {
    resultDiv.innerHTML = '<div class="loading">🔄 Scanning QR Code...</div>';
    fileInput.disabled = true;
  } else {
    fileInput.disabled = false;
  }
}

// File validation
function validateFile(file) {
  const maxSize = 10 * 1024 * 1024; // 10MB limit
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  
  if (!allowedTypes.includes(file.type)) {
    throw new Error('Please select a valid image file (JPEG, PNG, GIF, or WebP)');
  }
  
  if (file.size > maxSize) {
    throw new Error('File size must be less than 10MB');
  }
  
  return true;
}

// Main QR scanning function
async function scanQRCode(file) {
  try {
    setLoading(true);
    
    // Validate file
    validateFile(file);
    
    return new Promise((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        try {
          // Set canvas size to image size (with reasonable limits)
          const maxDimension = 2048;
          let { width, height } = img;
          
          if (width > maxDimension || height > maxDimension) {
            const ratio = Math.min(maxDimension / width, maxDimension / height);
            width *= ratio;
            height *= ratio;
          }
          
          qrCanvas.width = width;
          qrCanvas.height = height;
          
          // Draw image on canvas
          ctx.drawImage(img, 0, 0, width, height);
          
          // Extract pixel data
          const imageData = ctx.getImageData(0, 0, width, height);
          
          // Decode QR using jsQR library
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          
          if (code) {
            resolve(code.data);
          } else {
            reject(new Error('No QR code found in this image'));
          }
        } catch (error) {
          reject(new Error('Error processing image: ' + error.message));
        }
      };
      
      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
      
      // Create local URL for image
      img.src = URL.createObjectURL(file);
    });
    
  } catch (error) {
    throw error;
  } finally {
    setLoading(false);
  }
}

// Event listener for file input
fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  
  try {
    const qrData = await scanQRCode(file);
    showSuccess(qrData);
  } catch (error) {
    showError(error.message);
  }
  
  // Clear the input for better UX
  event.target.value = '';
});

// Drag and drop functionality
const container = document.querySelector('.container');

container.addEventListener('dragover', (e) => {
  e.preventDefault();
  container.classList.add('drag-over');
});

container.addEventListener('dragleave', () => {
  container.classList.remove('drag-over');
});

container.addEventListener('drop', async (e) => {
  e.preventDefault();
  container.classList.remove('drag-over');
  
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    fileInput.files = files;
    fileInput.dispatchEvent(new Event('change'));
  }
});

// Initialize with instructions
resultDiv.innerHTML = '<div class="info">📱 Select an image containing a QR code to scan</div>';
