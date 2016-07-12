import React, {PropTypes} from 'react'
import { View, Text, ListView, TouchableHighlight } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import Routes from '../Navigation/Routes'

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent'


//import jsonfile from 'jsonfile'

// Styles
import styles from './Styles/ListviewCompromisesStyle'

class ListViewCompromises extends React.Component {

  constructor (props) {
    super(props)


    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    var file = '../Fixtures/compromissos.json'
    jsonfile.readFile(file, function(err, obj) {
      dataObjects = obj;
      console.dir(obj)
    })
    *************************************************************/
    var dataObjects = [{
      "_id": "comp_01",
      "projeto": "Revisão e Implantação do Projeto Orla, do Programa Brasília Competitiva.",
      "tipo": "Projeto Prioritário",
      "compromissos": [
        {
          "responsavel": "Secretaria de Estado de Infraestrutura e Serviços Públicos",
          "metas": [
            {
              "meta": "Implantação de 15 Km de pista de ciclismo/caminhada na Orla do Lago",
              "prazo": "30/12/2016"
            }
          ]
        },
        {
          "responsavel": "Novacap",
          "metas": [
            {
              "meta": "Contratação e início das obras da Concha Acústica - 2a etapa",
              "prazo": "31/10/2016"
            },
            {
              "meta": "Conclusão do Calçadão da Ponte das Garças - Deck Sul",
              "prazo": "31/10/2016"
            }
          ]
        }
      ]
    },

    {
      "_id": "comp_02",
      "projeto": "Construção do Túnel de Taguatinga (EIXO OESTE), do Programa Mobilidade Integrada e Sustentável",
      "tipo": "Projeto Prioritário",
      "compromissos": [
        {
          "responsavel": "Novacap",
          "metas": [
            {
              "meta": "Conclusão dos projetos executivos e início da obra do túnel de Taguatinga",
              "prazo": "30/12/2016"
            }
          ]
        }
      ]
    },
    {
      "_id": "comp_03",
      "projeto": "Alargamento do Viaduto da EPTG (EIXO OESTE), do Programa Mobilidade Integrada e Sustentável",
      "tipo": "Projeto Prioritário",
      "compromissos": [
        {
          "responsavel": "Novacap",
          "metas": [
            {
              "meta": "Publicação do edital de licitação da obra de alargamento do viaduto da EPTG com a entrada do túnel de Taguatinga — até 30/12/2016.",
              "prazo": "30/12/2016"
            }
          ]
        }
      ]
    }
    ]



    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.props.navigator.state.tapHamburger = () => {
      this.props.navigator.drawer.toggle()
    }
  }

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow (rowData) {

    return <TouchableHighlight onPress={() => {
          //this._pressRow(rowData._id);
          }}>
          <View style={styles.itemView}>
              <Text style={styles.itemText}>{rowData.tipo}</Text>
              <Text style={styles.itemText}>{rowData.projeto}</Text>
              <Text style={styles.itemText}>Metas</Text>
              {rowData.compromissos.map(function(object, i){
                    return <View key={i}>
                          <Text >Responsável: {object.responsavel}</Text>
                        {object.metas.map(function(meta, i){
                          return <View key={i}>
                                    <Text >
                                      Meta: {meta.meta}
                                    </Text>
                                    <Text >
                                      Prazo: {meta.prazo}
                                    </Text>
                                  </View>;

                      })}
                    </View>;


                })}
          </View>
        </TouchableHighlight>;
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  _pressRow (rowID: number) {
    //TODO: detail compromisse
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this._noRowData()} />
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(ListViewCompromises)
