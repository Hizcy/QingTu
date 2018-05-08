using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QY.QingTu.Model
{
    /// <summary>
    /// 管理者表
    /// </summary>
    public class tb_Administrators
    {
        /// <summary>
        /// 管理员主键自增
        /// </summary>
        public int AdministratorId { get; set; }

        /// <summary>
        /// 管理员名字
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 密码MD5加密
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// 手机号
        /// </summary>
        public string Phone { get; set; }

        /// <summary>
        /// 邮箱
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime UpdateTime { get; set; }
    }
}
