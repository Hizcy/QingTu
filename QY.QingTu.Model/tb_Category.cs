using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QY.QingTu.Model
{
    /// <summary>
    /// 类目表
    /// </summary>
    public class tb_Category
    {
        /// <summary>
        /// 主键自增
        /// </summary>
        public int CategoryId { get; set; }

        /// <summary>
        /// 类目名称
        /// </summary>
        public string CategoryName { get; set; }

        /// <summary>
        /// 描述
        /// </summary>
        public string Describe { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 状态（0删除，1正常）
        /// </summary>
        public int Status { get; set; }

        /// <summary>
        /// 添加人
        /// </summary>
        public int AdministratorId { get; set; } 
    }
}
