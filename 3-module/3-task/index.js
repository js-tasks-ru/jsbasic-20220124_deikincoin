function camelize(str) {
  return str.split('-').map(function(item, index) {
    if (index == 0) {
      return item;
    } else {
      return item[0].toUpperCase() + item.slice(1);
    }
  }).join('');
}

camelize('background-color') == 'backgroundColor';
camelize('list-style-image') == 'listStyleImage';
camelize('-webkit-transition') == 'WebkitTransition';
