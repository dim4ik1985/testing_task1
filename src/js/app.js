// TODO: write code here

import CardFormat from "../components/card-format/card-format";
import WidgetActions from "../components/widget-actions/widget_actions";
import ValidNumber from "../components/valid-number/valid-number";

const format = new CardFormat(".validator__cards-list");
const validNum = new ValidNumber(".validator__message");
const inputText = new WidgetActions(
  ".validator__form",
  format.checkFormat,
  validNum.checkCard
);
