using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QY.QingTu.Model
{
    /// <summary>
    /// 专栏作者表
    /// </summary>
    public class tb_Author
    {
        /// <summary>
        /// 
        /// </summary>
        public int AuthorId { get; set; }

        /// <summary>
        /// 用户唯一标识(关联tb_Users表)
        /// </summary>
        public string OpenId { get; set; }

        /// <summary>
        /// 真是姓名
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// 头像
        /// </summary>
        public string HeadPicture { get; set; }

        /// <summary>
        /// 手机号
        /// </summary>
        public string Phone { get; set; }

        /// <summary>
        ///  邮箱
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// 备注(审核未通过)
        /// </summary>
        public string Remark { get; set; }

        /// <summary>
        /// 审核人（关联tb_Administrators表）
        /// </summary>
        public int AdministratorId { get; set; }

        /// <summary>
        /// 添加时间
        /// </summary>
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime UpdateTime { get; set; }
    }
}
