const db = require('./db');
class Post{
    constructor(title,body){
        this.title = title
        this.body = body
    }
    async save(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let createdAtDate =`${year}-${month}-${day}`
    
    let sql = `
    INSERT INTO post(
        title,
        body,
        created_at
    )
    VALUES(
        "${this.title}",
        "${this.body}",
        "${createdAtDate}"
    )
    `;

    return db.execute(sql)
    // const [newPost, _] = await db.execute(sql)
    // return newPost
    }
    static findAll(){
        let sql = "SELECT * FROM post"
        return db.execute(sql)
    }

    static findById(id){
        let sql = `SELECT * FROM post WHERE id=${id}`
        return db.execute(sql)
    }
    static updateById(id,title,body){
        let sql = `UPDATE post SET title = "${title}", body="${body}" WHERE id = ${id}`
        return db.execute(sql)
    }
    static deleteById(id){
        let sql = `DELETE FROM post WHERE id=${id}`
        return db.execute(sql)
    }
}
module.exports = Post
