///one web component class
class MyFooter extends HTMLElement {
    constructor() {
        super()
    }
}
///-----------------------------------


///นำคลาสที่สร้างมาลงทะเบียนผ่าน my-footer
customElements.define('my-footer', MyFooter)