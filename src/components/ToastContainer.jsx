import Toast from './Toast';

const ToastContainer = ({ toasts, removeToast }) => {
  if (toasts.length === 0) return null;
  
  return (
    <>
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          className="fixed z-50"
          style={{
            top: `${16 + index * 80}px`,
            right: '16px'
          }}
        >
          <Toast
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </>
  );
};

export default ToastContainer;