class NegociationView extends View {

    constructor(element) {
        super(element);
    }
  
    template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            ${model.negociations.map((m) => 
                `<tr>
                            <td>${DateHelper.dateToText(m.date)}</td>
                            <td>${m.quantity}</td>
                            <td>${m.price}</td>
                            <td>${m.volume}</td>
                        </tr>`
            ).join('')}
            </tbody>
            
            <tfoot>
                <td colspan="3">Total:</td>
                <td>${model.negociations.reduce((total, m) => total + m.volume, 0.0)}</td>
            </tfoot>
        </table>
    `;
    }
}