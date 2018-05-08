using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QY.QingTu.Model
{
    /// <summary>
    /// 用户表
    /// </summary>
    public class tb_Users
    {
        /// <summary>
        /// 用户唯一标识
        /// </summary>
        public string OpenId { get; set; }

        /// <summary>
        /// 用户昵称
        /// </summary>
        public string NickName { get; set; }

        /// <summary>
        /// 用户头像
        /// </summary>
        public string AvatarUrl { get; set; }

        /// <summary>
        /// 用户的性别(值为1时是男性，值为2时是女性，值为0时是未知)
        /// </summary>
        public char Gender { get; set; }

        /// <summary>
        /// 城市（拼音）
        /// </summary>
        public string ZCity { get; set; }

        /// <summary>
        /// 城市（汉字)
        /// </summary>
        public string City { get; set; }

        /// <summary>
        /// 省份（拼音）
        /// </summary>
        public string ZProvince { get; set; }

        /// <summary>
        /// 省份（汉字）
        /// </summary>
        public string Province { get; set; }

        /// <summary>
        /// 用户所在的国家
        /// </summary>
        public string Country { get; set; }

        /// <summary>
        /// 语言
        /// </summary>
        public string Language { get; set; }

        /// <summary>
        /// 状态
        /// </summary>
        public char Static { get; set; }

        /// <summary>
        /// 用户名（备注），管理员添加
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// 关注时间
        /// </summary>
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime UpdateTime { get; set; }

        /// <summary>
        /// 修改人/操作人（关联tb_Administrators表）
        /// </summary>
        public int AdministratorId { get; set; }
    }
}
