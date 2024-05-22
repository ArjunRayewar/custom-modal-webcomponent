// Insert Button JS
class CustomButton extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render();
    }

    render(){
        const style = `
        <style>
        .btn{
            height: auto;
            line-height: normal;
            min-height: 34px;
            background-color: transparent;
            border-radius: 8px;
            color: #0072ed;
            border: 1px solid #0072ed;
            padding: 0 12px;
            transition: color 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
            -webkit-font-smoothing: antialiased;
            font-weight: 799;
            min-width: 75px;
            overflow: hidden;
            position: relative;
            white-space: nowrap;
            width: auto;
            cursor: pointer;
            margin: 0;
        }

        .btn:hover{
            background-color: #E6F1FD;
            border: 1px solid #0072ed;
            color: #0072ed;
        }
        
        </style>
        `;
        const template = `
        <button class="btn" id="open">
            <slot name="button"></slot>
        </button>
        `;
        this.shadowRoot.innerHTML = `${style} ${template}`;
    }

}

customElements.define("custom-button", CustomButton);