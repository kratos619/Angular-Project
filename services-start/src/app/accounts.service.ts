export class AccountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    addAccount(name : string , status : string){
        // this.accounts.unshift(name);
    }

    updateStatus(id: number, newStatus: string ){

    }
}