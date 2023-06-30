import * as XLSX from 'xlsx';

// 自动计算col列宽
function auto_width(ws, data) {
  /*set worksheet max width per col*/
  const colWidth = data.map((row) =>
    row.map((val) => {
      /*if null/undefined*/
      if (val == null) {
        return { wch: 10 };
      } else if (val.toString().charCodeAt(0) > 255) {
        /*if chinese*/
        return { wch: val.toString().length * 2 };
      } else {
        return { wch: val.toString().length };
      }
    })
  );
  /*start in the first row*/
  let result = colWidth[0];
  for (let i = 1; i < colWidth.length; i++) {
    for (let j = 0; j < colWidth[i].length; j++) {
      if (result[j]['wch'] < colWidth[i][j]['wch']) {
        result[j]['wch'] = colWidth[i][j]['wch'];
      }
    }
  }
  ws['!cols'] = result;
}

// 将json数据转换成数组
function json_to_array(key, jsonData) {
  return jsonData.map((v) =>
    key.map((j) => {
      return v[j];
    })
  );
}

/**
 * @param data Array，表体数据
 * @param key Array，字段名
 * @param filename String，文件名
 * @param autoWidth Boolean，是否自动根据key自定义列宽度
 */
export const JsonToExcel = ({ data, key, filename, autoWidth, mgs }) => {
  const ws = XLSX.utils.json_to_sheet(data, {
    header: key,
    skipHeader: true,
  });
  if (autoWidth) {
    const arr = json_to_array(key, data);
    auto_width(ws, arr);
  }
  if (mgs) {
    ws['!merges'] = mgs;
  } else {
    ws['!merges'] = [XLSX.utils.decode_range('A1:E1')];
  }
  console.debug('ws', ws, ws['A2']);
  if (ws['A2']) {
    ws['A2'].s = {
      alignment: {
        horizontal: 'center',
      },
      font: {
        sz: 12,
        bold: true,
        color: {
          rgb: '3bc117',
        },
      },
    };
  }
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, filename);
  XLSX.writeFile(wb, filename + '.xlsx');
};

export default {
  JsonToExcel,
};
