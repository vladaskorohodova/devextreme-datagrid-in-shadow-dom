<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/787614691/24.1.3%2B)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# DataGrid for DevExtreme - Shadow DOM Support

[Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) allows you to attach a DOM subtree to an element and have the internals of this tree hidden from JavaScript and CSS running in the page. This example sets up a Shadow DOM host so you can put a DataGrid component into it.

![DataGrid in Shadow DOM](/datagrid-shadow-dom.png)

To attach a Shadow DOM tree, follow the instructions for each framework:

- [Angular](https://angular.io/guide/view-encapsulation#shadow-dom-encapsulation)    
    ```
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
        // ...
        encapsulation: ViewEncapsulation.ShadowDom,
    })
    export class AppComponent {
        // ...
    }
    ```

- Vue    
    ```
    const app = createApp(App);
    const shadowHost = document.getElementById("app") as HTMLElement;
    const shadowRoot = shadowHost.attachShadow({ mode: "open" }) as any;

    app.mount(shadowRoot);
    ```

- React    
    ```
    const shadowHost = document.getElementById('root') as HTMLElement;
    const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
    const root = ReactDOM.createRoot(shadowRoot);

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
    ```


## Files to Review

- **Angular**
    - [app.component.html](Angular/src/app/app.component.html)
    - [app.component.ts](Angular/src/app/app.component.ts)
- **Vue**
    - [Home.vue](Vue/src/components/HomeContent.vue)
- **React**
    - [App.tsx](React/src/App.tsx)
