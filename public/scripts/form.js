const buttons = document.querySelector('.add-edit')
const addArticle = document.querySelector('.add-btn');
const editArticle = document.querySelector('.edit-btn');
const addForm = document.querySelector('.add-form');
const editForm = document.querySelector('.edit-form')
const editArticleSubmit = document.querySelector('.submit-edited-article')
const newArticleSubmit = document.querySelector('.submit-new-article')
addArticle.addEventListener('click', () => {
    buttons.classList.toggle('display-none');
    addForm.classList.toggle('display-form');
})
editArticle.addEventListener('click', () => {
    buttons.classList.toggle('display-none');
    editForm.classList.toggle('display-form');
})

newArticleSubmit.addEventListener('click', submitnewForm);
editArticleSubmit.addEventListener('click', submitEditedForm);
function submitnewForm() {
    const formData = new FormData(addForm)
    const data = [];
    for(let pair of formData.entries()) {
        data.push(`${pair[0]}: ${pair[1]}`);
     }
     console.log(data)
}
function submitEditedForm() {
    const formData = new FormData(editForm)
    const data = [];
    for(let pair of formData.entries()) {
        data.push(`${pair[0]}: ${pair[1]}`);
     }
     console.log(data)
}
