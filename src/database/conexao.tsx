import * as SQLite from 'expo-sqlite';

export class Conexao {
    private static instance: Conexao;

    private constructor() { 
     
    }
    public static getInstance(): Conexao {
        if (!Conexao.instance) {
            Conexao.instance = new Conexao();
            console.log("instancia Nova da Conexão");
        }
        else{
        console.log("instancia Existente da Conexão");
        }
        return Conexao.instance;
    }

    public getConnection() {
       return SQLite.openDatabase("database.db");
    }

}

// import * as SQLite from 'expo-sqlite';
// export const Conexao = {
//     getConnection: () => SQLite.openDatabase("database.db"), 
// };

