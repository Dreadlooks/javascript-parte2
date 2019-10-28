class NegociationController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputDate = $('#data');
        this._inputQuantity =  $('#quantidade');
        this._inputPrice = $('#valor');
        this._negociations = new NegociationList();
        this._negociationView = new NegociationView($('#negociationView'));
        
        this._negociationView.update(this._negociations);
        this._message = new Message();
        this._messageView = new MessageView($('#messageView'));
        this._messageView.update(this._message);
}

    add(event) {
        event.preventDefault();

        let negociation = this._createNegociation();
        
        this._negociations.add(negociation);
        this._message.text = "Negociação adicionada com sucesso!";
        this._negociationView.update(this._negociations);
        this._messageView.update(this._message);
        this._clearForm();
    }

    _createNegociation() {
        return new Negociation(
            DateHelper.textToDate(this._inputDate.value),
            this._inputQuantity.value,
            this._inputPrice.value
        );
    }

    _clearForm() {
        this._inputDate.value = '';
        this._inputQuantity.value = 1;
        this._inputPrice.value = 0.0;

        this._inputDate.focus();
    }
}