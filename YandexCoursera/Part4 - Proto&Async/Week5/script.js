// РљРѕРґ РІР°Р»РёРґР°С†РёРё С„РѕСЂРјС‹

function validateForm(classNames) {
    const getById = id => document.getElementById(id)
    const addClass = (element, className) => element.classList.add(className)
    const removeClass = (element, className) => element.classList.remove(className)
    const getData = (element, data) => element.dataset[data]

    function validateNumber(element) {
        const value = Number(element.value);
        if (isNaN(value)) return false
        let isValid = true

        const validatorMin = getData(element, 'validatorMin')
        const validatorMax = getData(element, 'validatorMax')

        if (validatorMin && Number(validatorMin) > value) isValid = false
        if (validatorMax && Number(validatorMax) < value) isValid = false
        return isValid
    }

    function validateRegexp(element) {
        const value = element.value
        if (value === '') return true
        return new RegExp(getData(element, 'validatorPattern')).test(value)
    }

    function validateLetters(element) {
        const value = element.value;
        if (value === '' && typeof getData(element, 'required') !== "undefined") return false
        return !new RegExp("^.*[^A-zРђ-СЏРЃС‘].*$").test(value)
    }

    function validate(element, classNames) {
        const validators = {
            number: validateNumber,
            regexp: validateRegexp,
            letters: validateLetters,
        }


        const isValid = validators[getData(element, 'validator')](element)

        if (!isValid) {
            addClass(element, classNames.inputErrorClass)
        }
    }

    const onBlur = (classNames) => (e) => validate(e.target, classNames)
    const onFocus = (errorClass) => (e) => removeClass(e.target, errorClass)

    function addListeners(form, classNames) {
        const inputs = form.querySelectorAll('input')

        inputs.forEach(input => {
            input.addEventListener('blur', onBlur(classNames))
            input.addEventListener('focus', onFocus(classNames.inputErrorClass))
        });
    }

    function onSendForm(form, classNames) {

        const send = (e) => {
            e.preventDefault()

            const inputs = form.querySelectorAll('input')
            inputs.forEach(input =>validate(input, classNames));

            const errorInputs = document.querySelectorAll(`.${classNames.inputErrorClass}`).length

            removeClass(form, classNames.formValidClass)
            removeClass(form, classNames.formInvalidClass)

            addClass(
                form,
                errorInputs ? classNames.formInvalidClass : classNames.formValidClass
            )
        }

        form.querySelector('button').addEventListener('click', send)


        inputs.forEach(input => {
            input.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) send(e)
            })
        });
    }

    const form = getById(classNames.formId)

    addListeners(form, classNames)
    onSendForm(form, classNames)

}