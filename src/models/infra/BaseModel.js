//import initSqlJs from 'sql.js'
import uuidv4 from 'uuid/v4'

let storeName = '_localStore-ChatLibary'
    , version = '1.0.0'
    , db = {

    }


class BaseModel {


    constructor(props) {
        this._table = props.table
        this.db = this._open()
        
    }

    

    _open() {
        let storage = localStorage.getItem(storeName)

        if(storage == '' || storage == null)
           return this._createDataBase()

        try {

            return JSON.parse(storage)
        }catch(e){
            throw 'Banco de dados corrompido'
        }
    }

   

    _createDataBase() {
        let db = { 
            _v: version
            , id : uuidv4()
            , tables : []
        }

        localStorage.setItem(storeName , JSON.stringify(db))
        return db
    }

    loadState(setState) {
        let table = this.db.tables.find( table => table.name === this._table)

        if(table)
        {
            setState(table.data)
            return
        }

        console.warn(`State para table '${this._table}' não inicializado.`)
    }

    save() {
        console.log('Save state: ' , this.state)
        console.log('State value', JSON.stringify(this.state))
        let table = this._table
        
        if(this.db.tables.find( e => e.name === table)) {
            this._updateTable()
        } 
        else {
            this._addTable()
        }
        

        this._commit()
    }

    _commit() {
        let data = JSON.stringify(this.db)
        localStorage.setItem(storeName, data)
    }

    _updateTable() {
        let tableName = this._table
        let table = this.db.tables.find( table => table.name === tableName)

        table.data = (state => {
            let data = JSON.stringify(state)
            // resolve proxy data
            return JSON.parse(data) 
        })(this.state)
    }

    _addTable() {
        let table = this._table

        this.db.tables.push(( state => {

            let data = JSON.stringify(state)
            // resolve proxy data
            return {
              name : table
              , data : JSON.parse(data)  
            } 

        })(this.state))
    }
}

export default BaseModel