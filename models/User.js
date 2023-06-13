class User {
    static _client = null;
    static _tableName = 'boats';
    static _attributes = {
        first_name: 'string',
        last_name: 'string',
        email: 'string',
        boat_license: 'int'
    }

    static async create (insertValues) {
        const insertAttr = Object.entries(this._attributes)
            .filter(([attr, domain]) => attr in insertValues)
            .map(([attr]) => attr);
        const insertSchemaAttr = insertAttr.map(attr => `"${attr}"`).join(',');

        const insertValuesStr = insertAttr.map(attr => {
            const value = insertValues[attr];
            return typeof value === 'string' ? `'${value}'` : value;
        }).join(',');

        const str = `INSERT INTO ${this._tableName} (${insertSchemaAttr})
                     VALUES (${insertValuesStr})
                     RETURNING *;`;
        const {rows} = await this._client.query(str);
        return rows;
    }

    static async findByPk (pk) {
        const {rows} = await this._client.query(`SELECT *
                                                 FROM ${this._tableName}
                                                 WHERE id = ${Number(pk)};`);
        return rows;
    }

    static async findAll () {
        const {rows} = await this._client.query(`SELECT *
                                                 FROM ${this._tableName};`);

        return rows;
    }

    static async deleteByPk (pk) {
        const {rows: deleted_row} = await this._client.query(`DELETE
                                                              FROM ${this._tableName}
                                                              WHERE id = ${Number(pk)}
                                                              RETURNING *;`);
        return deleted_row;
    }

    static async updateByPk ({id, updateValues}) {
        const insertAttr = Object.entries(this._attributes)
            .filter(([attr, domain]) => attr in updateValues)
            .map(([attr]) => attr);

        const insertValueStr = insertAttr.map(attr => {
            const value = updateValues[attr];
            return `${attr} = ${typeof value === 'string' ? `'${value}'` : value}`;
        }).join(',');

        const {rows} = await this._client.query(`UPDATE "${this._tableName}"
                                                 SET ${insertValueStr}
                                                 WHERE id = ${id}
                                                 RETURNING *`);
        return rows;
    }
}

module.exports = User;