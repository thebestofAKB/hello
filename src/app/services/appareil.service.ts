export class AppareilService {

    appareils = [

        {
          id: 1,
          name: "Machine a laver",
          status: "eteint"
        },
    
        {
          id: 2,
          name: "Television",
          status: "eteint"
        },
    
        {
          id: 3,
          name: "Ordinateur",
          status: "allume"
        }
        
    ];

    getAppareilById(id: number): any {
      const appareil = this.appareils.find(
        (appareilObject) => {
          return appareilObject.id === id;
        }
      );

      return appareil;
    }

    switchOn() {
      for (let appareil of this.appareils) {                                                                                                                                                      
        appareil.status = 'allume';
      }
    }

    switchOff() {
      for (let appareil of this.appareils) {
        appareil.status = 'eteint';
      }
    }

    switchOnOne(index: number) {
      this.appareils[index].status = 'allume';
    }

    switchOffOne(index: number) {
      this.appareils[index].status = 'eteint';
    }

}