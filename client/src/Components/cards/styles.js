import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  boxContainer: {
    margin: "0 auto",
    marginTop: "3%",
    marginRight: "12%",
    maxWidth: 1155,
    height: 300,
    padding: 25,
    textAlign: "left"
  },
  card: {
    maxWidth: 340,
    height: 260,
    margin: 3,
    marginRight: 10
  },
  media: {
    height: 38,
    paddingTop: "50%" //16:9 비율이래
  },
  title: {
    marginLeft: 45,
    marginBottom: 5,
    textAlign: "left"
  },
  text: {
    paddingTop: 10
  }
});

export default useStyles;
