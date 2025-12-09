import { Question, QuestionType } from '../types';

// Helper to create IDs
let idCounter = 1;
const genId = (prefix: string) => `${prefix}-${idCounter++}`;

export const questions: Question[] = [
  // --- 第一部分 选择、判断 ---
  // (一) 第一小节
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '1、下列选项中不是项目与日常运作的区别的是( )。',
    options: [
      'A、 项目是以目标为导向的，日常运作是通过效率和有效性体现的。',
      'B、 项目是通过项目经理及其团队工作完成的，而日常运作是职能式的线性管理。',
      'C、 项目需要有专业知识的人来完成，而日常运作的完成无需特定专业知识。',
      'D、 项目是一次性的，日常运作是重复性的。'
    ],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '2、以下都是日常运作和项目的共同之处，除了( )。',
    options: [
      'A、 由人来做',
      'B、 受限于有限的资源',
      'C、 需要规划、执行和控制',
      'D、 都是重复性工作'
    ],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '3、下列选项中不是 PMBOK 的知识域的是( )。',
    options: ['A、 招聘管理', 'B、 质量管理', 'C、 范围管理', 'D、 风险管理'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '4、下列选项中属于项目的是( )。',
    options: ['A、 上课', 'B、 社区保安', 'C、 野餐活动', 'D、 每天的卫生保洁'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '5、下列活动中不是项目的是( )。',
    options: ['A、 野餐活动', 'B、 集体婚礼', 'C、 上课', 'D、 开发操作系统'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '6、下列选项中不是项目的特征的是( )。',
    options: [
      'A、 项目具有明确的目标',
      'B、 项目具有限定的周期',
      'C、 项目可以重复进行',
      'D、 项目对资源成本具有约束性'
    ],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '7、下列选项中最能体现项目的特征( )。',
    options: ['A、 运用进度计划技巧', 'B、 整合范围与成本', 'C、 确定期限', 'D、 利用网络进行跟踪'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '8、项目管理过程中的进度目标，成本目标，质量目标，范围目标等各个目标之间是( )的。',
    options: ['A、 相互独立', 'B、 相互关联和制约', 'C、 进度目标最重要', 'D、 没有关系'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '9、以下哪项不是制约项目目标实现的主要因素( )。',
    options: ['A、 范围', 'B、 进度', 'C、 成本', 'D、 风险'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '10、项目管理知识体系指南(PMBOKR 指南)作为一部公认的项目管理标准，规定了项目管理的方法、过程和做法，从而( )。',
    options: [
      'A、 成为可共享和反复使用的规则，实现项目管理中的最佳秩序',
      'B、 成为具有强制性的项目管理规范',
      'C、 可以不加修改地用于任何行业的项目管理',
      'D、 成为对项目管理知识体系的完整描述'
    ],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '11、项目的三重制约是( )。',
    options: ['A、 范围、时间和成本', 'B、 时间、成本和质量', 'C、 范围、质量和成本', 'D、 范围、进度和质量'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '12、下列关于子项目的说法都是正确的，除了( )。',
    options: [
      'A、 子项目的划分便于把部分工作发包给外部企业',
      'B、 项目生命周期中的一个阶段可以被作为一个子项目',
      'C、 需要使用同样人力资源(如水电安装工人)的工作，可以被作为子项目',
      'D、 划分子项目，有利于减少管理工作量，降低管理成本'
    ],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '13、以下关于项目的说法都是正确的，除了( )。',
    options: [
      'A、 项目经常作为实现组织战略计划的一种手段',
      'B、 项目可以在组织中的所有层次上进行',
      'C、 项目是那些在组织日常运营范围内无法有效开展的活动',
      'D、 项目可以由一个人、一个组织单元或多个组织单元构成'
    ],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '14、每个组织都为实现某些目标而从事某些项目与运营工作。下列关于项目与运营的说法，不正确的是( )。',
    options: [
      'A、 项目和运营都受制于有限的资源',
      'B、 运营是持续不断和重复进行的，而项目是临时性的、独特的',
      'C、 项目与运营都需要被规划、执行和控制',
      'D、 运营是项目生命周期收尾阶段的重要工作之一'
    ],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '15、在范围、时间、成本和质量等相互制约的因素中，通常( )。',
    options: ['A、 范围是最重要的', 'B、 质量是最重要的', 'C、 由管理层决定哪个更重要', 'D、 由项目经理决定哪个更重要'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '16、为了确保项目得到执行组织最大程度的支持，项目经理应该( )。',
    options: [
      'A、 编制良好的沟通计划',
      'B、 把项目需求与执行组织的战略联系在一起',
      'C、 把项目需求与高级管理者的个人需求联系在一起',
      'D、 在项目计划中规定将如何进行团队建设'
    ],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '17、项目容易受到风险的影响，这是因为( )。',
    options: [
      'A、 墨菲定律“如果某件事情可能出错，它就会出错”',
      'B、 每一个项目都是独特的',
      'C、 项目的资源不足',
      'D、 高级管理层的态度易变'
    ],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '18、项目管理知识体系指南中包括( )。',
    options: [
      'A、 应用领域的知识',
      'B、 项目生命周期的知识',
      'C、 尚未得到广泛应用的项目管理新知识',
      'D、 产品生命周期的知识'
    ],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '19、项目管理的核心知识领域包含( )。',
    options: [
      'A、 项目集成管理、项目时间管理、项目成本管理',
      'B、 项目范围管理、项目时间管理、项目质量管理',
      'C、 项目时间管理、项目成本管理、项目资源管理',
      'D、 项目风险管理、项目成本管理、项目质量管理'
    ],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '20、( )是为了创造一个唯一的产品或提供一个唯一的服务而进行的临时性的努力。',
    options: ['A、 过程', 'B、 项目', 'C、 项目群', 'D、 组合'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '21、项目经理的职责不包括( )。',
    options: ['A、 开发计划', 'B、 组织实施', 'C、 项目控制', 'D、 提供资金'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '22、项目经理在管理项目时,应该能够以合理的行动来把项目管理知识应用于实践。以下哪一项对项目经理如何行动有最重要的作用?( )',
    options: [
      'A、 项目经理的项目管理知识',
      'B、 项目经理的项目管理实践能力',
      'C、 项目经理的个人素质',
      'D、 项目经理的整合能力'
    ],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '23、下列不是项目立项过程内容的是( )。',
    options: ['A、 项目的目标', 'B、 项目的风险', 'C、 项目的时间表', 'D、 项目使用的资源和经费'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '24、以下哪项不包括在项目章程中?( )。',
    options: ['A、 对项目的确认', 'B、 对项目经理的授权', 'C、 对项目风险的分析', 'D、 项目目标的描述'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '25、合同一旦签署了就具有法律约束力,除非( )。',
    options: ['A、 一方不愿意履行义务', 'B、 一方宣布合同无效', 'C、 合同违反了法律', 'D、 一方没有能力负担财务结果'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '26、项目发起人主要为项目提供( )。',
    options: ['A、 项目范围说明书', 'B、 项目资金', 'C、 项目章程', 'D、 项目验收标准'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '27、项目章程中不包括以下哪项内容( )。',
    options: ['A、 项目成本估算', 'B、 项目名称', 'C、 项目经理及联系方式', 'D、 项目成员及角色'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '28、项目章程( )。',
    options: ['A、 明确了项目经理', 'B、 确定了项目的质量标准', 'C、 明确了团队的纪律', 'D、 定义了项目需求'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s1'),
    type: QuestionType.SINGLE_CHOICE,
    category: '1. 项目与运作',
    question: '29、下列关于项目说法正确的是( )。',
    options: [
      'A、 项目都是一次性的并由项目经理独自完成',
      'B、 项目是一项以满足客户或市场需求为目的且可以产生收益的活动',
      'C、 项目一旦确定就不会发生变更',
      'D、 项目是提供某项独特的结果而进行的临时性努力'
    ],
    correctAnswer: 'D'
  },

  // --- (二) 第二小节 (Software/Scope/Cost) ---
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '1、( )是软件项目的的一个突出特点，可以导致软件项目的蔓延。',
    options: ['A、 需求变更', 'B、 暂时性', 'C、 阶段性', 'D、 约束性'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '2、下列不属于软件需求范畴的是?( )',
    options: ['A、 软件项目采用什么样的实现技术', 'B、 用户需要软件能做什么样的事情', 'C、 用户需要软件完成什么样的功能', 'D、 用户需要软件达到什么样的性能'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '3、范围基线由( )组成。',
    options: ['A、 WBS', 'B、 项目章程、批准的详细的项目范围说明书和 WBS', 'C、 项目章程、项目工作说明书和 WBS', 'D、 批准的详细的项目范围说明书、WBS 和 WBS 字典'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '4、你正在管理一个新产品研发项目，要研制出一种永不卡住的拉链。“永不卡住”是属于( )。',
    options: ['A、 项目需求', 'B、 商业需求', 'C、 交付需求', 'D、 产品需求'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '5、下面哪个不是需求管理的过程( )。',
    options: ['A、 需求设计', 'B、 需求获取', 'C、 需求分析', 'D、 需求变更'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '6、( )定义了开发人员必须实现的软件功能，使得用户通过使用此软件能完成他们的任务，从而满足了业务需求。',
    options: ['A、 功能需求', 'B、 系统需求', 'C、 质量特性', 'D、 业务需求'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '7、WBS 非常重要，因为下列原因，除了( )。',
    options: ['A、 帮助组织工作', 'B、 防止遗漏工作', 'C、 为项目估算提供依据', 'D、 确定团队成员责任'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '8、下列不是创建 WBS 的方法的是( )。',
    options: ['A、 自顶向下', 'B、 自底向上', 'C、 控制方法', 'D、 模板参照'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '9、任务分解时，( )方法从特殊到一般的方向进行，首先定义一些特殊的任务，然后将这些任务组织起来，形成更高级别的 WBS 层。',
    options: ['A、 模板参照', 'B、 自顶向下', 'C、 类比', 'D、 自底向上'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '10、检验 WBS 分解结果的标准不包括以下那一项?( )',
    options: ['A、 最底层的要素是否是实现目标的充分必要条件', 'B、 非叶节点是否包含两个以上的叶节点', 'C、 最底层元素是否有重复', 'D、 最底层要素是否有清晰完整定义'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '11、WBS 是对项目由粗到细的分解过程，它的结构是( )。',
    options: ['A、 分层的集合结构', 'B、 分级的树形结构', 'C、 分层的线性结构', 'D、 分级的图状结构'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '12、任务分解时，( )方法从一般到特殊的方向进行，从项目的大局着手，然后逐步分解子细目，将项目变为更细、更完善的部分。',
    options: ['A、 模板参照', 'B、 自顶向下', 'C、 类比', 'D、 自底向上'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '13、以下哪个不是创建工作分解结构过程的输出?( )',
    options: ['A、 项目范围说明书', 'B、 工作分解结构', 'C、 工作分解结构词典', 'D、 范围基准'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '14、工作分解结构底层的要素是( )。',
    options: ['A、 控制账户', 'B、 规划包', 'C、 规划要素', 'D、 工作包'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '15、项目范围说明书中通常包括以下哪些内容?( )',
    options: [
      'A、 产品范围、项目可交付成果、项目进度里程碑、项目除外责任',
      'B、 产品范围、产品验收标准、项目可交付成果、项目组织结构图、项目除外责任',
      'C、 产品范围、产品验收标准、项目可交付成果、项目除外责任、项目制约因素',
      'D、 产品范围、产品验收标准、项目可交付成果、项目假设条件、项目审批要求'
    ],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '16、如果你是某项目的项目经理，你已经估算出每个任务(工作单元)的成本是￥129。这个项目一共有 1200 项任务(工作单元)，你采用什么估算方法?( )',
    options: ['A、 自下而上估算法', 'B、 类比估算法', 'C、 专家估算法', 'D、 参数估算法'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '17、在成本管理过程中，项目经理确定的每个时间段，各个工作单元的成本是( )。',
    options: ['A、 估算', 'B、 预算', 'C、 直接成本', 'D、 间接成本'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '18、成本管理就是确保项目在预算范围之内的管理过程，不包括以下哪一项( )。',
    options: ['A、 成本估算', 'B、 成本预算', 'C、 成本控制', 'D、 成本核算'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '19、投资者赵某可以选择股票和储蓄存款两种投资方式。他于 2017 年 1 月 1 日用了 2 万元购进某股票，一年后亏损了 500 元，如果当时他选择储蓄存款，一年后将有 360 元的收益。由此可知，赵某投资股票的机会成本为( )元。',
    options: ['A、 500', 'B、 360', 'C、 860', 'D、 140'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '20、成本分类是指根据成本核算和成本管理的不同要求，将成本分成不同的类别。其中，项目团队差旅费、工资属于( )。',
    options: ['A、 直接成本', 'B、 沉没成本', 'C、 固定成本', 'D、 机会成本'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '21、在管理项目及投资决策过程中，需要考虑很多成本因素，比如人员的工资、项目过程中需要的物料、设备等，但是在投资决策的时候我们不需要考虑( )，还应尽量排出它的干扰。',
    options: ['A、 机会成本', 'B、 可变成本', 'C、 沉没成本', 'D、 间接成本'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '22、制定成本管理计划的依据不包括( )。',
    options: ['A、 范围基准', 'B、 进度基准', 'C、 项目章程', 'D、 挣值规则'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '23、( )的准确性取决于模型的成熟度和基础数据的可靠性。',
    options: ['A、 类比估算', 'B、 三点估算', 'C、 自下而上', 'D、 参数估算'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '24、WBS 最底层的工作单元被称为工作包。以下关于工作包的叙述中，正确的是( )。',
    options: [
      'A、可依据工作包来确定进度安排、成本估算等工作',
      'B、工作包可以非常具体，也可以很粗略，视项目情况而定',
      'C、如果项目规模很大，也可以将其分解为子项目，这时子项目可以认为是一个工作包',
      'D、工作包的规模应该较小，可以在 40 小时之内完成'
    ],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '25、某公司决定在现有公文处理系统的基础上，新开发一个移动端 APP 便于大家远程办公。项目经理召开工作会议，就工作分解结构提出了如下的建议，其中( )是不妥当的。',
    options: [
      'A、项目组所有人员都要参与，任务分解的层次控制在 4 至 6 层之间',
      'B、对目前尚不清楚具体活动的模块可以使用规划包进行分解',
      'C、项目干系人对完成的 WBS 给予确认，并达成共识',
      'D、项目经理负责项目分解，外包商负责外包合同 WBS 分解'
    ],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '26、成本基准是用来度量与检测项目成本绩效的按时间分段预算，图中给出了某项目期望现金流、成本基准、资金需求情况，图中区间 A 应为( )。',
    options: ['A、管理储备', 'B、成本偏差', 'C、进度偏差', 'D、超出的成本'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '27、成本管理分为成本估算、成本预算和成本控制三个过程。以下关于成本预算的叙述中，不正确的是( )。',
    options: [
      'A、成本预算过程完成后，可能会引起项目管理计划的更新',
      'B、管理储备视为范围和成本的潜在变化而预留的预算，需要体现在项目成本基线里',
      'C、成本基准计划可以作为度量项目绩效的依据',
      'D、成本基准按时间分段计算，通常以 S 曲线的形式表示'
    ],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '28、项目进行到某阶段时，项目经理进行绩效分析，计算出 CPI 值为 1.09，这表示( )。',
    options: [
      'A、每花费 109 元人民币，创造了相当于 100 元的价值',
      'B、每花费 100 元人民币，创造了相当于 109 元的价值',
      'C、项目进展到计划进度的 109%',
      'D、项目超额支出 9%的成本'
    ],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '28-2、项目经理小李对自己的项目采用挣值法进行分析后，发现 SPI>1、CPI<1，则该项目( )。',
    options: ['A、进度超前，成本节约', 'B、进度超前，成本超支', 'C、进度延后，成本节约', 'D、进度延后，成本超支'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '29、项目经理在运行预算方案编制时，收集到的基础数据如下：工作包的成本估算为 40 万元；工作包的应急储备金为 4 万元；管理储备金为 2 万元。该项目的成本基准是( )万元。',
    options: ['A、40', 'B、44', 'C、42', 'D、46'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s2'),
    type: QuestionType.SINGLE_CHOICE,
    category: '2. 软件与范围成本',
    question: '30、( )利用历史数据之间的统计关系和其他变量，来进行项目工作的成本估算。',
    options: ['A、类比估算', 'B、参数估算', 'C、自下而下估算', 'D、三点估算'],
    correctAnswer: 'B'
  },

  // --- (三) 第三小节 (Schedule/Quality) ---
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '1、快速跟进是指( )。',
    options: ['A、 采用并行执行任务，加速项目进展', 'B、 用一个任务取代另外的任务', 'C、 如有可能，减少任务数量', 'D、 减轻项目风险'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '2、赶工一个任务时，你应该关注( )。',
    options: ['A、 尽可能多的任务', 'B、 非关键任务', 'C、 加速执行关键路径上的任务', 'D、 通过成本最低化加速执行任务'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '3、“软件编码完成之后，我才可以对它进行软件测试”，这句话说明了哪种依赖关系？( )',
    options: ['A、 强制性依赖关系', 'B、 软逻辑关系', 'C、 外部依赖关系', 'D、 里程碑'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '4、“只有机器组装完毕，团队才能对其测试”，这句话说明了哪种依赖关系？( )',
    options: ['A、强制性依赖关系', 'B、内部的强制性依赖关系', 'C、软逻辑关系', 'D、外部依赖关系'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '5、关于网络图，下面哪个是不正确的？( )',
    options: ['A、 网络图可用于安排计划', 'B、 网络图展示任务之间的逻辑关系', 'C、 网络图可用于跟踪项目', 'D、 网络图可用于详细的时间管理'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '6、规划项目进度管理是为实施项目进度管理制定政策、程序，并形成文档化的项目进度管理计划的过程，( )不属于规划项目进度管理的输入。',
    options: ['A、 项目章程', 'B、 范围基准', 'C、 里程碑清单', 'D、 组织文化'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '7、活动定义的输出不包括( )。',
    options: ['A、 活动清单', 'B、 活动属性', 'C、 里程碑清单', 'D、 进度基准'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '8、项目进度管理包括为管理项目按时完成所需的 7 个过程，其中识别和记录为完成项目可交付成果而需采取的具体行动是( )。',
    options: ['A、 规划进度管理', 'B、 定义活动', 'C、 估算活动资源', 'D、 制订进度计划'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '9、在项目进度网络图中，你可以发现多种时差。在某特定活动中被使用且不影响任何后续活动的时差被称为( )。',
    options: ['A、 内部时差', 'B、 自由时差', 'C、 总时差', 'D、 项目时差'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '10、以下哪种是最常用的进度网络图绘制方法?( )',
    options: ['A、 前导图法', 'B、 箭线法', 'C、 双代号法', 'D、 条件图形法'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '11、一下关于前导图说法不正确的是( )。',
    options: ['A、 用节点表示活动', 'B、 用箭线表示活动之间的关系', 'C、 还可以叫单代号网络图', 'D、 特殊情况可以使用虚活动'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '12、定义活动过程所得到的最终成果是( )。',
    options: ['A、 可交付成果', 'B、 活动', 'C、 工作包', 'D、 工作任务'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '13、在使用前导图法编制网络图时，很少用到的一种逻辑关系是( )。',
    options: ['A、 完成到开始(FS)', 'B、 完成到完成(FF)', 'C、 开始到开始(SS)', 'D、 开始到完成(SF)'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '14、关键活动是指( )。',
    options: ['A、 特别重要的活动', 'B、 时差为负值的活动', 'C、 时差为正值的活动', 'D、 时差为零的活动'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '15、以下说法不正确的是( )。',
    options: [
      'A、总浮动的时间等于本活动的最晚完成时间减去本活动的最早完成时间',
      'B、总浮动的时间等于本活动的最晚开始时间减去本活动的最早开始时间',
      'C、自由浮动时间等于紧后活动的最早开始时间的最小值减去本活动的最早完成时间',
      'D、关键路径上活动的总浮动时间与自由浮动时间不一定均为 0'
    ],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '16、关于进度网络图，以下哪个说法是正确的?( )',
    options: [
      'A、 进度网络图就是进度计划',
      'B、 进度网络图通常用于向管理层汇报项目进展情况',
      'C、 进度网络图用于表示活动之间的逻辑关系',
      'D、 进度网络图只能用前导图方式绘制'
    ],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '17、为了加快项目进度，你决定在全部的文件编写工作结束之前 3 天就开始文件印刷的版面设计工作。这是一种什么逻辑关系?( )',
    options: [
      'A、 带时间滞后量的开始到开始关系',
      'B、 带时间提前量的完成到开始关系',
      'C、 带时间提前量的开始到开始关系',
      'D、 带时间滞后量的完成到开始关系'
    ],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '18、赶工一个任务时，你应该关注( )。',
    options: ['A、尽可能多的任务', 'B、非关键任务', 'C、加速执行关键路径上的任务', 'D、通过成本最低化加速执行任务'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '19、下面哪项可以决定进度的灵活性( )。',
    options: ['A、PERT', 'B、Total float', 'C、ADM', 'D、赶工'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '20、不遵守下列哪种逻辑关系，会给项目带来最大的不利影响?( )',
    options: ['A、 外部逻辑关系', 'B、 选择性逻辑关系', 'C、 软逻辑关系', 'D、 硬逻辑关系'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '21、“质量成本”是一个项目管理概念，它说明了下列哪项成本？( )',
    options: ['A、 额外需求的成本', 'B、 需求变更的成本', 'C、 确保符合需求的成本', 'D、 固定成本'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '22、( )是企业的生命也是信誉。',
    options: ['A、 形象', 'B、 质量', 'C、 利润', 'D、 效益'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '23、某公司在教育服务领域持续发展，已有丰富的项目经验，近日新立项的教育服务项目需要规划质量管理，则应采用( )的方法。',
    options: ['A、成本收益分析法', 'B、质量成本法', 'C、标杆对照法', 'D、实验设计'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '24、质量管理工具( )常用于找出导致项目问题产生的潜在原因。',
    options: ['A、控制图', 'B、因果图', 'C、散点图', 'D、直方图'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '25、项目质量管理的目标是满足( )的需要',
    options: ['A、老板', 'B、干系人', 'C、项目', 'D、组织'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '26、资源分析人员在对某项目进行活动资源估算分析时，发现的主要问题是：该项目依赖张工的经验和个人能力，但同时张工还在其它项目中担任重要角色。为了保证项目资源的使用不发生冲突，资源分析人员在进行资源估算时应提交( )。',
    options: ['A、专家评审意见', 'B、活动属性', 'C、资源类比估算清单', 'D、活动资源日历'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '27、已知网络计划中，工作 M 有两项紧后工作，这两项紧后工作的最早开始时间分别为第 15 天和第 17 天，工作 M 的最早开始时间和最迟开始时间分别为第 6 天和第 9 天，如果工作 M 的持续时间为 9 天，则工作 M( )。',
    options: ['A、总时差为 3 天', 'B、自由时差为 1 天', 'C、总时差为 2 天', 'D、自由时差为 2 天'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '28、某软件开发项目拆分成 3 个模块，项目组对每个模块的开发量(代码行)进行了估计(如下表)，该软件项目的总体规模估算为( )代码行。(1:1000/1500/2000, 2:5000/6000/8000, 3:2000/2500/4000)',
    options: ['A、10333', 'B、10667', 'C、14000', 'D、10000'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '29、项目进度控制是依据项目进度基准计划对项目的实际进度进行监控，使项目能够按时完成，以下关于项目进度控制的叙述中( )是不正确的。',
    options: [
      'A、项目进度至关重要，因此进度控制需要在项目初期优先关注',
      'B、进度控制必须与其他变化控制，包括成本控制与范围控制紧密结合',
      'C、项目进度控制是项目整体控制的一个组成部分',
      'D、对项目进度的控制，应重点关注项目进展报告和执行状态报告'
    ],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s3'),
    type: QuestionType.SINGLE_CHOICE,
    category: '3. 进度与质量',
    question: '30、项目经理向往在做软件项目成本估算时，先考虑了最不利的情况，估算出项目成本为 120 人日，又考虑了最有利的情况下项目成本为 60 人日，最后考虑一般情况下的项目成本可能为 75 人日，该项目最终的成本预算应为( )人日。',
    options: ['A、100', 'B、90', 'C、80', 'D、75'],
    correctAnswer: 'C'
  },

  // --- (四) 第四小节 (Organization/Team) ---
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '1、在( )组织结构中，项目成员没有安全感',
    options: ['A、 职能型', 'B、 矩阵型', 'C、 项目型', 'D、 弱矩阵型'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '2、在一个高科技公司，项目经理正在为一个新的项目选择合适的组织结构，这个项目涉及多的领域和特性，他应该选择( )组织结构',
    options: ['A、 矩阵型', 'B、 项目型', 'C、 职能型', 'D、 组织型'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '3、下列哪项可以使认可和奖励系统最为有效?( )',
    options: ['A、 给优秀员工大幅度涨工资', 'B、 在项目结束时进行一次性奖励', 'C、 对加班工作多的员工给予最多奖励', 'D、 根据员工的重要需求安排奖励'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '4、在项目管理的 3 种组织结构中，适用于主要由一个部门完成的项目或技术比较成熟的项目组织结构是( )。',
    options: ['A、 矩阵型组织结构', 'B、 项目型组织结构', 'C、 职能型组织结构', 'D、 都一样'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '5、在 3 种组织结构中，( )组织结构是目前最普遍的项目组织形式，它是一个标准的金字塔型组织形式',
    options: ['A、 矩阵型', 'B、 项目型', 'C、 职能型', 'D、 都一样'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '6、以下说法错误的是( )。',
    options: [
      'A、 团队是一定数量的个体成员的集合',
      'B、 团队包括自己组织的人、供应商、分包商、客户',
      'C、 团队应注重个人发挥，应该将某项任务分工给擅长该技术的职员',
      'D、 团队的目的是开发出高质量的产品'
    ],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '7、通过分享权力和使用人际关系技能，使他人为了共同目标而相互合作。这是( )。',
    options: ['A、 领导力', 'B、 团队建设', 'C、 激励', 'D、 影响力'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '8、责任分配矩阵具有以下作用，除了( )。',
    options: [
      'A、 反映与每个人有关的所有活动',
      'B、 反映与每个活动有关的所有人',
      'C、 为每个工作指定唯一责任点',
      'D、 使每个人都只负责一项工作'
    ],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '9、制订人力资源计划过程的输出包括( )。',
    options: ['A、 人员配备管理计划', 'B、 角色与职责', 'C、 项目组织机构图', 'D、 人力资源计划'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '10、高效的项目团队应该( )。',
    options: ['A、 以领导为导向', 'B、 以工作为导向', 'C、 集中办公', 'D、 通过电子网络联系'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '11、项目已经启动，刚刚进入了计划编制阶段。在计划编制阶段的早期，项目经理通常应该采用什么领导风格?( )',
    options: ['A、 指挥', 'B、 授权', 'C、 参与', 'D、 民主'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '12、以下哪个不是管理项目团队过程的输出?( )',
    options: ['A、 变更请求', 'B、 事业环境因素更新', 'C、 项目管理计划更新', 'D、 团队绩效评价'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '13、为了获得项目所需的人力资源，项目经理经常要与以下各方谈判，除了( )。',
    options: ['A、 高级管理层', 'B、 职能部门经理', 'C、 其他项目经理', 'D、 外部资源供应商'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '14、以下哪个是组建项目团队过程的输入?( )',
    options: ['A、 活动资源需求', 'B、 资源日历', 'C、 组织机构图', 'D、 项目管理计划'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '15、管理项目团队过程属于( )。',
    options: ['A、 规划过程组', 'B、 执行过程组', 'C、 监控过程组', 'D、 收尾过程组'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '16、在矩阵式管理之下，项目经理应该如何取得项目所需的人力资源?( )',
    options: [
      'A、 指令职能部门经理提供所需的人力资源',
      'B、 从执行组织外部招聘尽可能多的人力资源',
      'C、 直接向职能部门中的员工发出加入项目团队的邀请信',
      'D、 与职能部门经理就所需人力资源进行谈判'
    ],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '17、塔库曼的五阶段团队建设理论是( )。',
    options: [
      'A、 形成、震荡、规范、成熟和解散',
      'B、 磨合、震荡、规范、成熟和解散',
      'C、 规范、磨合、震荡、成熟和解散',
      'D、 形成、规范、提高、成熟和解散'
    ],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '18、出色的项目经理应该既是管理者又是领导者。领导涉及以下各项，除了( )。',
    options: ['A、 为干系人创造利益', 'B、 有效地沟通', 'C、 激发和激励人们', 'D、 确定方向'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '19、以下哪个过程属于监控过程组?( )',
    options: ['A、 活动资源估算', 'B、 团队建设', 'C、 团队管理', 'D、 以上都不是'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '20、奖励应该针对( )。',
    options: [
      'A、 只有少数团队成员能够做到的事情',
      'B、 人人都能做到的行为',
      'C、 大多数人能做到的行为',
      'D、 团队成员解决管理层导致的问题的能力'
    ],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '21、赫兹伯格的双因素激励理论把与激励有关的因素分成( )。',
    options: [
      'A、 低层次因素与高层次因素',
      'B、 成就因素、权力因素与亲和因素',
      'C、 保健因素与激励因素',
      'D、 X 因素与 Y 因素'
    ],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '22、你有个员工正在做软件维护工作，他表示他想做开发工作。因为很难找到合适的人来做维护工作，你决定让他继续做维护给他加薪水 25%。可是这样你做后你发现他还是缺乏活力。这是什么理论的例子? ( )',
    options: [
      'A、 马斯洛理论(需求层次理论)',
      'B、 赫尔斯伯格理论(双因素理论)',
      'C、 麦克格雷理论(XY 理论)',
      'D、 期望理论(弗鲁姆)'
    ],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '23、项目沟通系统中，对项目沟通效果起关键作用的是( )。',
    options: ['A、 项目发起人', 'B、 高级管理层', 'C、 项目经理', 'D、 项目团队'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '24、项目经理花在沟通上的时间是( )。',
    options: ['A、20-40%', 'B、75-90%', 'C、60%', 'D、30%-60%'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '25、下面各项对沟通计划的描述，哪项是错误的( )。',
    options: ['A、确定沟通需求', 'B、确定沟通的内容', 'C、确定沟通方法', 'D、对项目管理是没有必要'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '26、编制沟通计划的基础是进行( )。',
    options: ['A、 沟通需求分析', 'B、 项目管理计划', 'C、 会议讨论', 'D、 项目范围说明书'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '27、对于项目中比较重要的通知，最好采用( )沟通方式',
    options: ['A、 口头', 'B、 书面', 'C、 网络方式', 'D、 电话'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '28、以下哪个说法是正确的?( )',
    options: [
      'A、 沟通得越多越好',
      'B、 沟通只能针对那些有利于项目成功的信息',
      'C、 为鼓励充分沟通，在规划沟通时，不能限制谁应该与谁沟通',
      'D、 应该把项目的所有信息发送给所有的干系人'
    ],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '29、问题日志用来记录和监督问题的解决情况。以下哪项对于确保问题解决最有用? ( )',
    options: [
      'A、 把问题作为一个单独的活动，列入项目进度计划中。',
      'B、 把问题的解决方案作为一个工作包，列入项目工作分解结构中。',
      'C、 项目经理亲自负责制定和执行问题的解决方案。',
      'D、 为问题的解决指定责任人，并规定解决日期。'
    ],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '30、以下都是沟通管理计划的内容，除了( )。',
    options: [
      'A、 谁可以接收什么信息',
      'B、 谁可以直接与项目经理沟通',
      'C、 分配给沟通活动的时间和资金',
      'D、 制约因素'
    ],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '31、项目沟通系统中，对项目沟通效果起关键作用的是( )。',
    options: ['A、 项目发起人', 'B、 高级管理层', 'C、 项目经理', 'D、 项目团队'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '32、在沟通管理中，个人通过对信息的感觉和认知，建立对信息的理解，这个过程属于( )。',
    options: ['A、 理解', 'B、 解码', 'C、 编码', 'D、 接收'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '33、项目经理发现一个团队成员的工作表现不佳。他处理这个问题的最好沟通方法是( )。',
    options: ['A、 正式书面沟通', 'B、 正式口头沟通', 'C、 非正式书面沟通', 'D、 非正式口头沟通'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '34、在冲突管理中，经常要集合多方观点和意见，得出一个多数人接受和承诺的冲突解决方案。这种冲突管理的方法被称为( )。',
    options: ['A、合作', 'B、强制', 'C、妥协', 'D、回避'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '35、你和你的同事就一个问题进行了激烈的讨论，这导致了产生了敌对的氛围。为了“降温”减轻这种气氛，你同意了你同事的观点。你此时使用的冲突解决方式是( )。',
    options: ['A、 问题解决', 'B、 回避', 'C、 强制', 'D、 面对'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '36、所有的文件都应当是书面的。一位项目团队成员反对这一程序。他非正式的执行一些任务。结果给项目造成了损失。在这种情况下项目经理应该采用哪一种冲突解决方法? ( )。',
    options: ['A、 安抚', 'B、 强制', 'C、 解决问题', 'D、 吸取教训'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s4'),
    type: QuestionType.SINGLE_CHOICE,
    category: '4. 组织与团队',
    question: '37、在沟通管理中，一般( )是最有效的沟通并解决干系人之间问题的方法。',
    options: ['A、面对面会议', 'B、问题日志', 'C、问题清单', 'D、绩效管理'],
    correctAnswer: 'A'
  },

  // --- (五) 第五小节 (Risk) ---
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '1、下列不属于项目风险的三要素的是( )。',
    options: ['A、 一个事件', 'B、 事件的产生原因', 'C、 事件发生的概率', 'D、 事件的影响'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '2、下列属于可预测风险的是( )。',
    options: ['A、 不现实的交付时间', 'B、 没有需求或软件范围的文档', 'C、 人员调整', 'D、 恶略的开发环境'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '3、下列不是风险管理过程的是( )。',
    options: ['A、 风险评估', 'B、 风险识别', 'C、 风险规划', 'D、 风险收集'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '4、以下各项关于回避风险的陈述除了( )都是正确的',
    options: [
      'A、 风险倘若发生，就接受后果',
      'B、 决定不对风险过高的项目进行投标',
      'C、 消除引起风险的因素',
      'D、 决定取消采用具有高风险的新技术，而采用原来熟悉的技术'
    ],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '5、以下哪个因素最有可能导致项目风险管理失败( )。',
    options: ['A、 风险应对计划不起作用', 'B、 风险监控不力', 'C、 缺乏风险登记册', 'D、 项目范围说明书不够详细'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '6、在风险管理中，风险责任人的主要责任是( )。',
    options: ['A、 识别风险', 'B、 预防风险发生', 'C、 规划风险应对措施', 'D、 实施风险应对措施'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '7、对未知风险通常应该采取以下哪项措施进行管理?( )',
    options: ['A、 事先制定应对措施', 'B、 设法消除', 'C、 制订应急计划', 'D、 设法减轻'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '8、某个新产品研发项目，预计投资 200 万美元。该产品未来市场前景很好的概率为 50％，可获利 1000 万美元；市场前景一般的概率为 30％，可获利 500 万美元。该项目的预期货币价值是( )。',
    options: ['A、 450 万美元', 'B、 650 万美元', 'C、 500 万美元', 'D、 数据不全，无法计算'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '9、不会为了处理某个风险而去修改项目计划的风险应对策略，称为( )。',
    options: ['A、 接受', 'B、 转移', 'C、 开拓', 'D、 回避'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '10、把最有能力的人分配给某个项目，以利于获得一个机会，这是属于( )。',
    options: ['A、 风险接受', 'B、 风险提高', 'C、 风险开拓', 'D、 风险分享'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '11、在风险概率影响矩阵中，高风险区域的机会( )。',
    options: [
      'A、 最容易抓住，但产生的效益最低',
      'B、 最容易抓住，且产生的效益最高',
      'C、 最难抓住，应该得到最大程度的监控',
      'D、 最难抓住，但是产生的效益最高'
    ],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '12、采购管理规划的方法包括：自制或外购分析、市场调研、交流会和( )。',
    options: ['A、 供方选择分析', 'B、 广告', 'C、 谈判', 'D、 头脑风暴'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '13、下列哪个不是项目管理计划的一部分?( )',
    options: ['A、里程碑图示', 'B、 进度', 'C、数据库设计', 'D、风险清单'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '14、项目管理过程中的进度目标、成本目标、质量目标、范围目标等各个目标之间是( )。',
    options: ['A、相互独立', 'B、相互关联和制约的', 'C、进度目标最重要', 'D、没有关系的'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '15、“对总量 1000 万元的工程项目进行期中检查，截止检查时已完成工作预算费用 410 万元，计划工作预算费用为 400 万元，已完成工作实际费用为 430 万元，则其费用绩效指数为( )。”',
    options: ['A、0.85', 'B、0.95', 'C、1.95', 'D、1.85'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '16、如果项目的成本预算是 1000 万，当前的实际成本是 500 万，挣值是 450 万，则该项目的成本绩效指数是( )，成本绩效为( ) 。',
    options: ['A、0.9， 成本超支', 'B、1.1，成本节约', 'C、1.1，成本超支', 'D、0.9，成本节约'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '17、在项目实施期间的某次周例会上，项目经理向大家通报了项目目前进度。根据以下表格特征，目前的进度( )。 [表: 基础设计 EV90 PV20000 AC10000; 详细设计 EV90 PV50000 AC60000; 测试 EV100 PV30000 AC40000]',
    options: ['A、提前计划 7%', 'B、落后计划 15%', 'C 落后计划 7%', 'D、提前计划 15%'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '18、进度控制重要的一个组成部分是( )。',
    options: [
      'A、确定进度偏差是否需要采取纠正措施',
      'B、定义为项目的可交付成果所需要的活动',
      'C、评估 WBS 定义是否足以支持进度计划',
      'D、确保项目队伍的士气高昂,发挥团队成员的潜力'
    ],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '19、CPI=0.90 的说明( )。',
    options: [
      'A、目前的预期成本超出计划的 90%',
      'B、投入一元钱产生 0.90 元的效果',
      'C、项目完成的时候，将超支 90%',
      'D、项目已经完成计划的 90%'
    ],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '20、项目接近结束的时候，如果客户希望对项目范围进行大的变更，项目经理应该如何做?( )',
    options: ['A、进行变更', 'B、告诉客户变更带来的影响', 'C、拒绝变更', 'D、向 SCCB 报告'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '21、在客户接受项目的交付结果之前，项目经理应该做什么? ( )',
    options: ['A、检查交付结果的质量', 'B、检查交付结果是否有遗漏', 'C、开具项目完成的发票', 'D、给项目成员分配新的项'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '22、项目的最后评审是( )。',
    options: [
      'A、根据项目基准，确定完成项目需要多少资源',
      'B、基于过去的绩效，调整进度和成本基准',
      'C、得到客户对项目可以交付成果的验收',
      'D、对项目进行全面的评价和审核'
    ],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '23、项目移交的成果不包括以下的哪一项( )。',
    options: ['A、系统使用手册', 'B、软件产品', 'C、成果规格说明书', 'D、经验教训登记册'],
    correctAnswer: 'D'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '24、风险可以从不同角度、根据不同的标准来进行分类。百年不遇的暴雨属于( )。',
    options: ['A、不可预测风险', 'B、可预测风险', 'C、已知风险', 'D、技术风险'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '25、在风险识别时，可以用到多种工具和技术。其中( )指的是从项目的优势、劣势、机会和威胁出发，对项目进行考察，从而更全地考虑风险。',
    options: ['A、头脑风暴法', 'B、因果图', 'C、SWOT 分析法', 'D、专家判断法'],
    correctAnswer: 'C'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '26、人们对风险事件都有一定的承受能力，当( )时，人们愿意承担的风险越大。',
    options: ['A、项目活动投入的越多', 'B、项目的收益越大', 'C、个人、组织拥有的资源越少', 'D、组织中高级别管理人员相对较少'],
    correctAnswer: 'B'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '27、通过概率和影响级别定义以及专家访谈，有助于纠正该过程所使用的数据中的偏差属于( )。',
    options: ['A、定性风险分析', 'B、识别风险', 'C、定量风险分析', 'D、风险监控'],
    correctAnswer: 'A'
  },
  {
    id: genId('p1-s5'),
    type: QuestionType.SINGLE_CHOICE,
    category: '5. 风险管理',
    question: '28、项目外包是承接项目可能采取的方式，但只有( )是允许的。',
    options: ['A、部分外包', 'B、整体外包', 'C、主体外包', 'D、层层转包'],
    correctAnswer: 'A'
  },

  // --- 第二部分 判断题 (Judgment) ---
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '1、搬家属于项目。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '2、项目是为了创造一个唯一的产品或提供一个唯一的服务而进行的永久性的努力。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '3、过程管理目的是要让过程能够被共享、复用,并得到持续的改进。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '4、项目具有临时性的特征。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '5、日常运作存在大量的变更管理，而项目基本保持连贯性的。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '6、项目开发过程中可以无限制地使用资源。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '7、项目立项可以确立项目目标,时间和资源成本,同时得到项目发起人的认可。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '8、项目建议书是项目计划阶段开发的文档。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '9、项目立项需要获得项目经理的认可,但不需要项目发起人的认可。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '10、项目章程是项目执行组织高层批准的确认项目存在的文件,其中不包括对项目经理的授权。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '11、项目经理是一个综合的角色。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '12、需求分析过程是确定项目如何实现的过程，并确定项目的技术方案。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '13、软件项目系统的响应时间属于功能性需求。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '14、WBS 提供了项目范围基线。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '15、如果开发人员对项目比较熟悉或者对项目大局有把握，开发 WBS 时最好采用自底向上方法。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '16、对于一个没有做过的项目，开发 WBS 时可以采用自底向上方法。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '17、在任务分解结果中，最底层的要素必须是实现项目目标的充分必要条件。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '18、对任务的分解只能是自上而下的。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '19、间接成本是与一个具体的项目相关的成本。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '20、软件项目的估算结果是比较准确的。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '21、在进行软件项目估算的时候，可以按照其它企业的模型进行项目估算。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '22、甘特图可以显示任务的基本信息，使用甘特图能方便地查看任务的工期，开始和结束时间以及资源的信息。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '23、活动清单是一份包含项目所需的全部活动的综合清单。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '24、活动属性是对活动清单中的活动描述的扩展。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '25、里程碑是项目生命周期中的一个时刻，里程碑的持续时间（指的是工期）为零，既不消耗资源也不花费成本，通常是指一个主要可交付成果的完成。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '26、紧前关系绘图法， PDM 也称前导图法或优先顺序图法，是用于编制项目进度网络图的一种方法，它使用节点代表活动，用箭头连接，以显示节点之间的逻辑关系。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '27、网络图中每一活动和每一事件可以有相同的一个代号。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '28、任两项活动的紧前事件和紧后事件代号至少有一个不相同，节点代号沿箭线方向不一定越来越大。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '29、流入（流出）同一节点的活动，均有共同的紧后活动（或紧前活动）。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '30、虚活动不消耗时间，也不消耗资源，只是为了弥补箭线图在表达活动依赖关系方面的不足。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '31、软件质量可以通过后期测试得以提高。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '32、资源平衡可能导致关键路径发生改变。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '33、甘特图可以显示任务的基本信息，使用甘特图能方便地查看任务的工期，开始和结束时间以及资源的信息。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '34、项目型的优点是可以资源共享。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '35、责任分配矩阵是明确项目团队成员的角色与职责的有效工具。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '36、职能型组织结构中项目经理的权利最大。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '37、为了创建一个组织结构图，项目管理者首先明确项目需要的人员类型。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '38、应尽量多建立一些沟通渠道。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '39、项目沟通的基本原则是及时性、准确性、完整性和可理解性。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '40、口头沟通不是项目沟通的方式。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '41、对于紧急的信息，应该通过口头的方式沟通;对于重要的信息，应采用书面的方式沟通。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '42、在项目管理过程中，沟通是项目管理者的一部分工作，而且是很少的一部分工作。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '43、在 IT 项目中，许多专家都认为：对于成功，威胁最大的就是沟通的失败。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '44、任何项目都是有风险的。（ ）',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '45、应对消极风险的常见策略是规避风险、转移风险、减轻转移和分享转移。（ ）',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '46、项目的风险几乎一样。（ ）',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '47、购买保险是一种回避风险的应对策略。（ ）',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '48、采购是企业经济活动的主要组成部分，所以必须遵循经济规律，追求经济效益。',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '49、基线产品是不能修改的。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '50、进度和成本是关系最为密切的两个目的，几乎成了对立关系，进度的压缩一定要依靠增加成本实现，而成本的降低也一定要牺牲工期进度为代价的。( )',
    correctAnswer: '错误'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '51、一个好的项目计划的开发应该是渐近式的。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '52、项目的范围发生变化，也必然会影响项目的工期进度、成本、项目的质量。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '53、项目移交是正常的项目结束过程。( )',
    correctAnswer: '正确'
  },
  {
    id: genId('judg'),
    type: QuestionType.JUDGMENT,
    category: '二、判断题',
    question: '54、项目清算是非正常的项目结束过程。( )',
    correctAnswer: '正确'
  },

  // --- 第二部分 简答题 (Flashcards) ---
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '1. 5个过程组',
    mnemonic: '启规执监收',
    explanation: '启动 → 规划 → 执行 → 监控 → 收尾',
    correctAnswer: '启动 → 规划 → 执行 → 监控 → 收尾'
  },
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '2. 十大知识领域',
    mnemonic: '整范进成，资沟风采干',
    explanation: '整合、范围、进度、成本、质量、资源、沟通、风险、采购、干系人',
    correctAnswer: '整合、范围、进度、成本、质量、资源、沟通、风险、采购、干系人'
  },
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '3. 范围管理过程',
    mnemonic: '规收定创确控',
    explanation: '规划、收集需求、定义范围、创WBS、确认范围、控制范围',
    correctAnswer: '规划、收集需求、定义范围、创WBS、确认范围、控制范围'
  },
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '4. 创建WBS任务',
    mnemonic: '分包，标清完',
    explanation: '分解、工作包、标识、清晰、完整',
    correctAnswer: '分解、工作包、标识、清晰、完整'
  },
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '5. 进度管理过程',
    mnemonic: '规定排估制控',
    explanation: '规划、定义活动、排列顺序、估算时长、制定计划、控制进度',
    correctAnswer: '规划、定义活动、排列顺序、估算时长、制定计划、控制进度'
  },
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '6. PDM 4种关系',
    mnemonic: '完开、始开、完成、始完',
    explanation: 'FS (Finish-to-Start), SS (Start-to-Start), FF (Finish-to-Finish), SF (Start-to-Finish)',
    correctAnswer: 'FS, SS, FF, SF'
  },
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '7. 活动依赖关系',
    mnemonic: '强选外内',
    explanation: '强制、选择、外部、内部',
    correctAnswer: '强制、选择、外部、内部'
  },
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '8. 团队组织结构',
    mnemonic: '职项矩',
    explanation: '职能型、项目型、矩阵型',
    correctAnswer: '职能型、项目型、矩阵型'
  },
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '9. 采购实施步骤',
    mnemonic: '备发接收选签管',
    explanation: '准备、发布、接收、选择、签订、管理',
    correctAnswer: '准备、发布、接收、选择、签订、管理'
  },
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '10. 变更控制流程',
    mnemonic: '提评审批更通',
    explanation: '提出、评估、审批、更新、通知',
    correctAnswer: '提出、评估、审批、更新、通知'
  },
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '11. 塔克曼阶段',
    mnemonic: '形震规熟散',
    explanation: '形成、震荡、规范、成熟、解散',
    correctAnswer: '形成、震荡、规范、成熟、解散'
  },
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '12. 合同注意事项',
    mnemonic: '交标付、产权、违变',
    explanation: '交付物、标准、付款、产权、违约、变更',
    correctAnswer: '交付物、标准、付款、产权、违约、变更'
  },
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '13. 十个子计划',
    mnemonic: '范需进成质，资沟风采相',
    explanation: '范围、需求、进度、成本、质量、资源、沟通、风险、采购、相关方',
    correctAnswer: '范围、需求、进度、成本、质量、资源、沟通、风险、采购、相关方'
  },
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '14. 项目章程内容',
    mnemonic: '目成理，相关需约批',
    explanation: '目标、成果、经理职权、相关方、需求、约束、批准',
    correctAnswer: '目标、成果、经理职权、相关方、需求、约束、批准'
  },
  {
    id: genId('fc'),
    type: QuestionType.SHORT_ANSWER,
    category: '简答题 / 记忆口诀',
    question: '15. 质量管理过程',
    mnemonic: '规管控',
    explanation: '规划、管理、控制',
    correctAnswer: '规划、管理、控制'
  },
];