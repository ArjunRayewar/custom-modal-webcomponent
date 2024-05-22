// insert message js
class CustomMessageDialog extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render();

    }
    render(){
        //writing all the styles
        const style = `
        <style>
            .modal{
                display:none;
                position: fixed;
                background-color: white;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 100;
                min-width: 200px;
                max-width:90%;
                width: 405px;
            }

            .modal-content{
                background: #ffffff;
                color: #6F6F76;
                margin: 10px;
                position: relative;
            }

            .modal-header {
                padding: 16px 16px 0;
                height: 32px
            }

            .modal-content h1 {
                -webkit-box-orient: vertical;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                white-space: initial;
                width: inherit;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #161618;
                font-weight: 400;
                -webkit-margin-after: 0;
                text-align: left;
                font-size: 24px;
                margin: 0
            }

            .modal-content h1 > * {
                vertical-align: text-top;
                margin: -1px 8px 0 0;
            }

            .icon{
                fill: transparent;
                display: inline-block;
                position: relative;
                color: red;
            }

            .modal-content h1.has-status .icon {
                top: 7px;
            }

            .modal-content h1.has-status .icon {
                height: 22px;
                left: -5px;
                margin-left: 8px;
                width: 22px;
            }

            .modal-content h1.is-error .icon {
                color: #da1217;
            }
            
            .modal-content .modal-body-wrapper {
                overflow: auto;
                padding-top: 20px;
                padding-left: 15px;
                padding-right:15px;
            }

            .modal-content .message {
                -moz-osx-font-smoothing: grayscale;
                -webkit-font-smoothing: antialiased;
                color: #6F6F76;
                line-height: 20px;
                margin-bottom: 0;
                max-width: 369px;
                padding: 0;
                text-align: left;
            }

            .modal-buttonset {
                border-top: 1px solid #C5C5C9;
                height: 50px;
            }

            .modal-body{
                padding-bottom: 10px;
            }
        </style>`;

        //the html template
        const template = `
        
        <div class="modal" id="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title has-status is-error">
                    <svg viewBox="0 0 18 18" class="icon"><g fill-rule="evenodd"><path d="M9 0a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9z" fill="currentColor" stroke="none"></path><path d="M9 11.615v1.308m0-7.846v5.23" stroke="#FFF" vector-effect="non-scaling-stroke"></path></g></svg>
                        <slot name="title"></slot>
                    <h1>
                </div>
                <div class="modal-body-wrapper">
                    <div class="modal-body">
                        <div class="message">
                            <slot name="message"></slot>
                        </div>
                    </div>
                <div>
                <div class="modal-buttonset">
                    <slot name="button-name"></slot>
                </div>
            <div>
        </div>
        `;

        //binding the template and css styles to the shadowRoot
        
        this.shadowRoot.innerHTML = `${style} ${template}`
    }

    open(){
        this.shadowRoot.querySelector("#modal").style.display = "flex";   //once the button is clicked adding the modal to the DOM
    }

    close(){
        this.shadowRoot.querySelector("#modal").style.display = "none";  //once the Restart Now button is clicked removing the modal from the DOM
    }
}

customElements.define("custom-message-dialog", CustomMessageDialog);  //registering the custom element 

