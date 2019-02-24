import dva from 'dva';
import './index.css';
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
// 3. Model
// console.log(require('./models/example').default)
// console.log(require('./models/count'))
app.model(require('./models/count').default)
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');