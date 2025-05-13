// Simple script to animate elements
document.querySelector('.message').style.animation = 'fadeIn 2s ease-in-out';
document.querySelector('.balloon').style.animation = 'float 5s infinite';
document.querySelector('.tree').style.animation = 'sway 3s ease-in-out infinite';
document.querySelector('.cake').style.animation = 'bounce 3s ease-in-out infinite';

// Keyframe animations
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0); }
    }
    @keyframes sway {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(10deg); }
        100% { transform: rotate(0deg); }
    }
    @keyframes bounce {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }
`;
document.head.appendChild(style);
