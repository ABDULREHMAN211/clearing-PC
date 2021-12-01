

const faunadb = require("faunadb");
const q = faunadb.query;



(async() => {
    const client = new faunadb.Client({secret: ""})

    try {
        /*
        const result = await client.query(
            q.CreateDatabase( {name:'gatsbyapp'})
        );
        */

        /* const result = await client.query(
            q.CreateKey({
                database: q.Database('gatsbyapp'),
                role: 'server'
            })
        );
        */

        /* 
        const result = await client.query(
            q.Create(q.Collection('post'),
            { data: {
                name:'Serverless applications are scalable',
                age: 40
            } })
        );
        */

        /*
        const result = await client.query(
            q.Map([
                'Gatsby.js generates static and dynamic websites',
                'FaunaDB is consistent',
                'Netlify deploys static assets on the edge',
            ],
            q.Lambda(
                'post_title_val',
                q.Create(q.Collection("post"), {data: {title: q.Var('post_title_val') }})
            ))
        );
        */

        /*
        const result = await client.query(
                q.Get(q.Ref(q.Collection("post"), "302180716712560138"))
            )
        */

       /*
        const result = await client.query(
                q.Get(q.Match(q.Index("posts_by_title"), "Serverless applications are scalable"))
        ) 
       */

        /*
        const result = await client.query(
          q.Update(
              q.Ref(q.Collection("post"),"302180716712561162"),
              { data: { title: "FaunaDB title is updated"}}
          )
        );
       */

        /*
        const result = await client.query(
            q.Replace(
                q.Ref(q.Collection('post'), "302180716712561162"),
                { data: { title: 'I love serverless app' } }
              )
        )*/

        const result = await client.query(
            q.Delete(q.Ref(q.Collection('post'), ""))
        )
        console.log("Result = ",result)
    }

    
    catch(error){
        console.log("Error = ",error)
        /*
        if (error.requestResult.statusCode === 400 && error.message === 'instance already exists') {
            console.log('Database with this name already exists');
          }
          else {
            console.log('Unknow Error: ');
            console.log(error);
          }
        */
        }
    
})()