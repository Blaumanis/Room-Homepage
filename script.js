// SELECTORS
const leftArrow = document.getElementById('leftArrow')
const rightArrow = document.getElementById('rightArrow')
const h1 = document.querySelector('h1')
const p = document.querySelector('.text-box p')
const mainSection = document.querySelector('.main-section')

// separate arrays with info
// const headingArray = [
//     'Discover innovative ways to decorate',
//     'We are available all across the globe',
//     'Manufactured with the best materials'
// ]

// const textArray = [
//     'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
//     'With stores all over the world, it’s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don’t hesitate to contact us today.',
//     'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.' 
// ]

// const imgArray = [
//     '/images/desktop-image-hero-1.jpg',
//     '/images/desktop-image-hero-2.jpg',
//     '/images/desktop-image-hero-3.jpg'
// ]

// object array with all the info
const sliderArray = [
    {
        "heading" :  'Discover innovative ways to decorate',
        "text" : 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
        "img" : '/images/desktop-image-hero-1.jpg',
    },
    {
        "heading" :  'We are available all across the globe',
        "text" : 'With stores all over the world, it’s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don’t hesitate to contact us today.',
        "img" : '/images/desktop-image-hero-2.jpg',
    },
    {
        "heading" :  'Manufactured with the best materials',
        "text" : 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.' ,
        "img" : '/images/desktop-image-hero-3.jpg',
    }
]

let active = 0;

// EVENT LISTENERS
// leftArrow.addEventListener('click', () => {
//     active--
//     if(active < 0){
//         active = headingArray.length - 1
//         active = textArray.length - 1
//         active = imgArray.length - 1
//     }
//     h1.innerText = headingArray[active]
//     p.innerText = textArray[active]
//     mainSection.style.background = `url('${imgArray[active]}') no-repeat center center/cover`
// })

// rightArrow.addEventListener('click', () => {
//     active++
//     if(active > headingArray.length - 1 && active > textArray.length - 1 && active > imgArray.length - 1){
//         active = 0;
//     }
//     h1.innerText = headingArray[active]
//     p.innerText = textArray[active]
//     mainSection.style.background = `url('${imgArray[active]}') no-repeat center center/cover`
// })

leftArrow.addEventListener('click', () => {
    active--
    if(active < 0){
        active = sliderArray.length - 1
    }
    h1.innerText = sliderArray[active].heading
    p.innerText = sliderArray[active].text
    mainSection.style.background = `url('${sliderArray[active].img}') no-repeat center center/cover`
})

rightArrow.addEventListener('click', () => {
    active++
    if(active > sliderArray.length - 1){
        active = 0;
    }
    h1.innerText = sliderArray[active].heading
    p.innerText = sliderArray[active].text
    mainSection.style.background = `url('${sliderArray[active].img}') no-repeat center center/cover`
})