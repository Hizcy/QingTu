using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QY.QingTu.Model
{
    /// <summary>
    /// 图文内容表
    /// </summary>
    public class tb_Graphic
    {
        /// <summary>
        /// 主键自增
        /// </summary>
        public int GraphicId { get; set; }

        /// <summary>
        /// 图文发布人(关联tb_Users表)
        /// </summary>
        public string OpenId { get; set; }

        /// <summary>
        /// 作品标题
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// 作品简介
        /// </summary>
        public string Introduction { get; set; }

        /// <summary>
        /// 图片路径
        /// </summary>
        public string PictureURL { get; set; }

        /// <summary>
        /// 所属类目（关联tb_Category表）
        /// </summary>
        public int CategoryId { get; set; }

        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreateTime { get; set; }

        /// <summary>
        /// 是否公开（0否，1是）
        /// </summary>
        public char IsPublic { get; set; }

        /// <summary>
        /// 状态（1待审/2已审/3未通过）
        /// </summary>
        public char State { get; set; }

        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime UpdateTime { get; set; }

        /// <summary>
        /// 审核人（关联tb_Administrators）
        /// </summary>
        public int AdministratorId { get; set; }
    }
}
