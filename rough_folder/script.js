window.onload = () => {
    setTimeout(() => {
        document.getElementById("switch-flat").setAttribute("checked", true);
        setTimeout(() => {
            document.getElementById("switch-flat").removeAttribute('checked');
            document.querySelector('label').innerHTML = `
            <style>
             .switch-flat__label:after {
                 content: '\\f0a4' !important;
             }
             </style>
            `;
        }, 1800);
        setTimeout(() => {
            document.querySelector('label').innerHTML = `
                <style>
                 .switch-flat__label:after {
                     content: '\\f25b' !important;
                 }
                 </style>
                `;
        }, 3800);
    }, 2000);


};
