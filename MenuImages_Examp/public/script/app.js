/* global $ */
$(document).ready(function(){
    let mylet;

    myFunction();

    function myFunction() {
        mylet = setTimeout(showPage, 300);
    }

    function showPage() {
        $(".loader").css({
            display: "none"
        });
        $(".wrapper").css({
            display: "flex"
        });
    }

    let video = document.querySelector(".video");
    let btn = document.querySelector(".cnt-btn");
    $(btn).click(() => {
        pause();
    });

    function pause() {
        if (video.paused) {
            video.play();
            btn.innerHTML = "Pause";
        } else {
            video.pause();
            btn.innerHTML = "Play";
        }
    }

    $('.header-btn').on('click', '.menu-link', () => {
        $(".header-nav").width("320px");
    });

    $('.header-nav').on('click', '.closebtn', () => {
        $(".header-nav").width('0');
    });

    $.getJSON('/api/items')
        .then(addItems);

    $('.myBtnContainer').on('click', '.btn', function() {
        $('.btn').removeClass('active');
        $(this).addClass('active');
    });

    $('.section-new__form').on('click', 'button', () => {
        createItems();
    });

    $(document).on("click", "span", function (e) {
        e.stopPropagation();
        removeItem($(this).parent());
        // window.location = '/blogs';
    });

});

function addItems(items) {
    items.forEach(item => {
        addItem(item);
    });
    creatCategBtn(items);
}

function addItem(item) {
    let ctg = item.category;
    let strCtg = ctg.split(' ')[0];
    let newTodo = $(`
<div class="column ${strCtg} show">
    <div class="cnt">
        <img src="${item.image}" alt="${item.category}">
        <h4>${item.name}</h4>
    </div>
    <span>x</span>
</div>`);
    newTodo.data('id', item._id);
    newTodo.data('completed', item.completed);
    $('.main-cnt').append(newTodo);
}

function createItems() {
    let itemTitle = $('#itemTitle').val().toLowerCase();
    let itemCtg = $('#itemCtg').val().toLowerCase();
    let itemImg = $('#itemImg').val().toLowerCase();
    $.post('/api/items', {name: itemTitle, category: itemCtg, image: itemImg})
        .then(newTodo => {
            $('#itemTitle').val('');
            $('#itemCtg').val('');
            $('#itemImg').val('');
            addItem(newTodo);
            window.location = '/blogs';
        })
        .catch(err => {
            console.log(err);
        });

}

function removeItem(item) {
    let clickedId = item.data('id');
    let deleteUrl = `/api/items/${clickedId}`;
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
        .then(data => {
            item.remove();
            // window.location = '/blogs';
        })
        .catch(err => console.log(err));
}

function creatCategBtn(items) {
    let arrCategor = filteredCategory(items);
    arrCategor.forEach(el => {
        let btnCtg = $(`
        <button class="btn ${el.split(' ')[0]}" onclick="filterSelection('${el.split(' ')[0]}')">
            ${el}
        </button>
    `);
        $('.myBtnContainer').append(btnCtg);

    });
}


function filteredCategory(arr) {
    return arr.map(item => {
        return(item['category']);
    }).filter((item, pos, self) => {
        return self.indexOf(item) === pos;
    });
}

function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("column");
    if (c === "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

function addClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {element.className += " " + arr2[i];}
    }
}

function removeClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


